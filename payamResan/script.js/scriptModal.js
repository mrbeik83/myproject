let b = 1;
const a1 = document.querySelector("#btn-pencil");
a1.addEventListener('click',myfunc1);
const div1 = document.createElement("div");
div1.innerHTML = `
<div class="container-modal">
<form action="">
    <div class="num1-modal">
        <label for="">شماره موبایل :</label>
        <input required maxlength="11" minlength="11" placeholder="... 0901" type="text">
    </div>
    <div class="num1-modal">
        <label  for="">نام و نام خانوادگی :</label>
        <input id = "lblName" type="text">
    </div>
    <div class="btn-modal">
        <button onclick="myfunc2()" id="btn-save">ذخیره</button>
    </div>
</form>
</div>        
`;
function myfunc1(){
const div2 = document.querySelector(".cont-left-mid-div");
div2.appendChild(div1);
const class1 = document.querySelector(".container-modal");
b++;
if(b % 2 ==0){
    class1.style.display = "flex";
}
else{
    class1.style.display = "none";
}
}
function myfunc2(){
    const list1 = document.querySelectorAll(".cont-right-down-up-div p");
    let salam = document.querySelector('.prof-right p');
    list1.forEach(respone => {
        if(respone.innerText == salam.innerHTML)
        {
           respone.innerHTML = document.querySelector("#lblName").value;
           salam.innerHTML = document.querySelector("#lblName").value;
        }
      })  
      const class1 = document.querySelector(".container-modal");
      class1.style.display = "none";
      
   
  
  
}
