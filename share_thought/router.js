const { Router } = require('express');
const controller = require('./controller/controller')

const router = Router();

router.get('/',controller.home)
router.post('/vents',controller.postHome)
router.get('/vents',controller.getHome)
router.get('/vents/create_post',controller.create_post)
router.post('/vents/comment/:id',controller.set_comment)
router.get('/vents/:tag',controller.filter)
router.get('/detail/:id',controller.detail)
router.get('/about', controller.about)


router.use((req,res)=>{
    res.render('404',{title:"404"})
})


module.exports = router;