let url = "https://jsonplaceholder.typicode.com/posts";

    async function myarticl(url1)
    {
        let response = await fetch(url1);
        let allMessage = await response.json();
        console.log(allMessage)
        allMessage.forEach(element => {
            let div = document.querySelector(".mydiv")
            let p = document.createElement('p');
            p.classList.add("mydiv-p")
            div.appendChild(p);
            p.innerText = " id : " + element.id + "\r" + " title : " + element.title + "\r" + " body : " + element.body; 
            
        });
        
    }
myarticl(url);