    let btnEmot = document.querySelector(".down-right div").addEventListener("click",myfunc);
    let i = 1;
    function myfunc(){
        i++;
            
        let imot = document.querySelector(".cont-right-down-down");
        
        const emojiez = [
            '&#128513',
            '&#128512',
            '&#128514',
            '&#128516',
            '&#128517',
            '&#128518',
            '&#128520',
            '&#128519',
            '&#128521',
            '&#128522',
            '&#128523',
            '&#128524',
            '&#128525',
            '&#128526',
            '&#128527',
            '&#128529',
            '&#128530',
            '&#128531',
            '&#128533',
            '&#128534',
            '&#128535',
            '&#128536',
            '❤️',
            '🥰'
        ]
        emojiez.forEach((item) => {
            let newP = document.createElement('p');
            newP.innerHTML = item;
            newP.classList.add('stic');
            newP.addEventListener('click' , () => {
                document.querySelector('textarea').value += newP.textContent;
            })
            imot.appendChild(newP);
        })
        if(i % 2 == 0){
            
            imot.style.display = "flex";

            
            
            
            // imot.innerHTML = `
            // <p class="stic">🥰</p>
            // <p class="stic">'&#128513',</p>
            // <p class="stic">'&#128512',</p>
            // <p class="stic">'&#128514',</p>
            // <p class="stic">'&#128516',</p>
            // <p class="stic">'&#128517',</p>
            // <p class="stic">'&#128518',</p>
            // <p class="stic">'&#128520',</p>
            // <p class="stic">'&#128519',</p>
            // <p class="stic">'&#128521',</p>
            // <p class="stic">'&#128522',</p>
            // <p class="stic">'&#128523',</p>
            // <p class="stic">'&#128524',</p>
            // <p class="stic">'&#128525',</p>
            // <p class="stic">'&#128526',</p>
            // <p class="stic">'&#128527',</p>
            // <p class="stic">'&#128529',</p>
            // <p class="stic">'&#128530',</p>
            // <p class="stic">'&#128531',</p>
            // <p class="stic">'&#128533',</p>
            // <p class="stic">'&#128534',</p>
            // <p class="stic">'&#128535',</p>
            // <p class="stic">'&#128536',</p>
            // <p class="stic">❤️</p>`

            }
        else if(i % 2 == 1)
        {
            imot.style.display = "none" ;
            imot.innerHTML = ``;
        }    
    //     const add1 = document.querySelectorAll(".stic");
    //     add1[0].addEventListener('click',myfunc1);
    //     function myfunc1(){
    //     document.querySelector('textarea').value += add1[0].textContent;
    //     }
    //     add1[1].addEventListener('click',myfunc2);
    //     function myfunc2(){
    //     document.querySelector('textarea').value += add1[1].textContent;
    //     }
    //     add1[2].addEventListener('click',myfunc3);
    //     function myfunc3(){
    //     document.querySelector('textarea').value += add1[2].textContent;
    //     }
    //     add1[3].addEventListener('click',myfunc4);
    //     function myfunc4(){
    //     document.querySelector('textarea').value += add1[3].textContent;
    //     }
    //     add1[4].addEventListener('click',myfunc5);
    //     function myfunc5(){
    //     document.querySelector('textarea').value += add1[4].textContent;
    //     }
    //     add1[5].addEventListener('click',myfunc6);
    //     function myfunc6(){
    //     document.querySelector('textarea').value += add1[5].textContent;
    //     }
    //     add1[6].addEventListener('click',myfunc7);
    //     function myfunc7(){
    //     document.querySelector('textarea').value += add1[6].textContent;
    //     }
    //     add1[7].addEventListener('click',myfunc8);
    //     function myfunc8(){
    //     document.querySelector('textarea').value += add1[7].textContent;
    //     }
    //     add1[8].addEventListener('click',myfunc9);
    //     function myfunc9(){
    //     document.querySelector('textarea').value += add1[8].textContent;
    //     }
    //     add1[9].addEventListener('click',myfunc10);
    //     function myfunc10(){
    //     document.querySelector('textarea').value += add1[9].textContent;
    //     }
    //     add1[10].addEventListener('click',myfunc11);
    //     function myfunc11(){
    //     document.querySelector('textarea').value += add1[10].textContent;
    //     }
    //     add1[11].addEventListener('click',myfunc12);
    //     function myfunc12(){
    //     document.querySelector('textarea').value += add1[11].textContent;
    //     }
    //     add1[12].addEventListener('click',myfunc13);
    //     function myfunc13(){
    //     document.querySelector('textarea').value += add1[12].textContent;
    //     }
    //     add1[13].addEventListener('click',myfunc14);
    //     function myfunc14(){
    //     document.querySelector('textarea').value += add1[13].textContent;
    //     }
    //     add1[14].addEventListener('click',myfunc15);
    //     function myfunc15(){
    //     document.querySelector('textarea').value += add1[14].textContent;
    //     }
    //     add1[15].addEventListener('click',myfunc16);
    //     function myfunc16(){
    //     document.querySelector('textarea').value += add1[15].textContent;
    //     }
    //     add1[16].addEventListener('click',myfunc17);
    //     function myfunc17(){
    //     document.querySelector('textarea').value += add1[16].textContent;
    //     }
    //     add1[17].addEventListener('click',myfunc18);
    //     function myfunc18(){
    //     document.querySelector('textarea').value += add1[17].textContent;
    //     }
    //     add1[18].addEventListener('click',myfunc19);
    //     function myfunc19(){
    //     document.querySelector('textarea').value += add1[18].textContent;
    //     }
    //     add1[19].addEventListener('click',myfunc20);
    //     function myfunc20(){
    //     document.querySelector('textarea').value += add1[19].textContent;
    //     }
    //     add1[20].addEventListener('click',myfunc21);
    //     function myfunc21(){
    //     document.querySelector('textarea').value += add1[20].textContent;
    //     }
    //     add1[21].addEventListener('click',myfunc22);
    //     function myfunc22(){
    //     document.querySelector('textarea').value += add1[21].textContent;
    //     }
    //     add1[22].addEventListener('click',myfunc23);
    //     function myfunc23(){
    //     document.querySelector('textarea').value += add1[22].textContent;
    //     }
    //     add1[23].addEventListener('click',myfunc24);
    //     function myfunc24(){
    //     document.querySelector('textarea').value += add1[23].textContent;
    //     }
    }