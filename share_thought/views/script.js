
const likeBtn = document.getElementById('like');

let isLiked = false;

likeBtn.addEventListener('click', () => {
    isLiked = !isLiked;

    if (isLiked) {
        likeBtn.style.color = 'red';
    } else {
        likeBtn.style.color = 'gray';
    }
});

const write_toogle = document.getElementById('write_toogle');
const comment_input = document.getElementById('comment_input');
const ic = document.getElementById('ic');
const ic_txt = document.getElementById('ic-text')

let isClicked = false;

write_toogle.addEventListener('click', () => {
    isClicked = !isClicked;

    if (isClicked) {
        comment_input.style.display = "block"
        ic.setAttribute('class', 'fa-solid fa-circle-xmark')
        ic_txt.innerHTML = 'close'
    } else {
        comment_input.style.display = "none"
        ic.setAttribute('class', 'fa-solid fa-pen-nib')
        ic_txt.innerHTML = 'write'
    }
})