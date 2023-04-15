
document.addEventListener('DOMContentLoaded', function () {
    let frmNewPost = document.querySelector('#frm-new-post');

    document.querySelector('#btn-new-post').onclick = () => {
        let btnNewPost = document.querySelector('#btn-new-post');
        frmNewPost.style.animationPlayState = 'paused';
        if (btnNewPost.className === 'btn-new-post') {
            frmNewPost.style.display = 'block';
            frmNewPost.style.animationName = 'grow';
            frmNewPost.style.animationPlayState = 'running';
            btnNewPost.innerHTML = 'Cancel';
            btnNewPost.setAttribute('class', 'btn-cancel');
        }
        else if (btnNewPost.className === 'btn-cancel') {
            frmNewPost.style.animationName = 'shrink';
            frmNewPost.style.animationPlayState = 'running';
            btnNewPost.innerHTML = 'New Post';
            btnNewPost.setAttribute('class', 'btn-new-post');
        }
    }


});