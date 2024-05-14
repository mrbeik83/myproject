
    // clickvoice
    let audio1 = document.querySelector("#mic");
    audio1.addEventListener("click",myfunc3);
    function myfunc3(){
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
            
        const audioChunks = [];

        mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
    })
    mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = document.createElement("audio");
        audio.setAttribute("src",audioUrl);
        audio.setAttribute("controls",true);
        const mid1 = document.querySelector(".cont-left-mid-div");
        mid1.appendChild(audio)
        
      });

    setTimeout(() => {
        mediaRecorder.stop();
      }, 5000);
})
        
  

    }
    
    



