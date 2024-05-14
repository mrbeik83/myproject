function openChats(event){
    let div = document.querySelector(".prof-right");
    const text = div.children[1];
    const img1 = div.children[0];
    img1.src = event.currentTarget.children[0].src;
    text.innerText = event.currentTarget.children[1].innerText;
    const chat = document.querySelector('.cont-left-mid-div');
    chat.innerHTML = '';
    

}
// const mydiv = document.querySelectorAll(".cont-right-down-up-div");
// mydiv.forEach(post => {
//     post.addEventListener('click',openChats);
// })