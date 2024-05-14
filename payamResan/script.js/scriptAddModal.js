let btn = document.querySelector('#plus');
let c =1;
btn.addEventListener('click',f12);
const div3 = document.createElement('div');
div3.innerHTML = `
<div class="container-add">
        <form action="">
            <div class="num1-add">
                <label for="">شماره موبایل :</label>
                <input required maxlength="11" minlength="11" placeholder="... 0901" type="text">
            </div>
            <div class="num1-add">
                <label for="">نام و نام خانوادگی :</label>
                <input id ="input-ziba" type="text">
            </div>
            <div class="btn-add">
                <button type="button" onclick = "f13()" id = "btn-save-1">افزودن مخاطب</button>
            </div>
        </form>
    </div>
    `;

function f12(){
    document.querySelector(".cont-left-mid-div").appendChild(div3);
    c++
    if(c % 2 ==0){
        document.querySelector('.container-add').style.display = "flex";
    }
    else{
        document.querySelector('.container-add').style.display = "none";
    }
    }
function f13(){
    let divZiba = document.createElement('div');
    divZiba.classList.add("cont-right-down-up-div");
    let divZiba1 = document.createElement('img');
    divZiba1.setAttribute("src","../picture/human.png")
    divZiba.appendChild(divZiba1);
    let textZiba = document.createElement('p');
    textZiba.innerText = document.querySelector('#input-ziba').value;
    divZiba.appendChild(textZiba);
    document.querySelector('.cont-right-down-up').appendChild(divZiba);
    divZiba.addEventListener('click',openChats);
    document.querySelector('.container-add').style.display = "none";

}
