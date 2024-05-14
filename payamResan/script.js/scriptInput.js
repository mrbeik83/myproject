const listText = document.querySelector(".cont-left-mid-div");
const btnSend = document.querySelector("#send");
btnSend.addEventListener('click',myfunc1);
function myfunc1() {
    console.log('salam')
    const inputText = document.querySelector('textarea');
    console.log(inputText)
    let p = document.createElement('p');
    p.classList.add("cont-left-mid-text");
    p.innerText = inputText.value;
    listText.appendChild(p)

    
}
