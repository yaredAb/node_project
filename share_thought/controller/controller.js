const {Narration, Comment} = require('../models/thoughts')

const home = (req, res) => {
    res.redirect('/vents')
}
const getHome = (req, res) => {
    Narration.find().sort({ createdAt: -1 })
        .then((result) => res.render('index', { posts: result, title: 'Home' }))
}

const postHome = (req, res) => {
    const tags = [];
    const rShip = req.body.rShip ? tags.push("relationship") : null
    const fam = req.body.family ? tags.push("family") : null
    const business = req.body.business ? tags.push("business") : null
    const exp = req.body.experience ? tags.push("experience") : null
    const fun = req.body.funny ? tags.push("funny") : null
    const other = req.body.other ? tags.push("other") : null
    if (tags.length < 1) {
        tags.push("other")
    }

    let name = req.body.name;
    name = name.length > 0 ? name : "Guest";

    const post = new Narration({
        name: name,
        title: req.body.title,
        text: req.body.text,
        tags: tags
    });
    post.save()
        .then(result => res.redirect('/'))
        .catch(err => console.log(err));
}

const create_post = (req, res) => {
    res.render('create_post', { title: 'Create a narration' });
}

const filter = (req, res) => {
    const tag = req.params.tag;

    Narration.find({ tags: { $in: [tag] } }).sort({ createdAt: -1 })
        .then(fil_result => res.render('index', { posts: fil_result, title: tag }))
        .catch(err => console.log("Something happened", err));
};

const detail = async (req, res) => {
    const id = req.params.id;

    try{
        const result = await Narration.findById(id);
        const commentFilter = await Comment.find({ 'comments.ventId': id });
        res.render('detail', {title: 'Vent Detail', result: result, comments: commentFilter})
        console.log(result);    
        console.log(commentFilter);       

    }catch(err){
        console.log(err)
    }

}

const set_comment = (req, res) => {

    const id = req.params.id;
    if(req.body.cName.length < 1 && req.body.cText.length < 1){
        return res.redirect('/detail/'+id)
    }
    else if ( req.body.cText.length < 1 ) {
        return res.redirect('/detail/'+id)
    }
    
    const cName = req.body.cName.length > 0 ? req.body.cName : 'Guest'
    const newComment = {
        cName,
        cText: req.body.cText,
        ventId: id
    }
    Comment.create({comments:newComment})
        .then((result) => res.redirect('/detail/'+id))
        .catch(err => console.log("error"))
    }

    module.exports = {
        home, getHome, postHome, create_post, filter, detail, set_comment
    }

