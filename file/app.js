// console.log("file.js");


// const keyBox = document.getElementById('a')


window.addEventListener('keydown', function(e){
    // console.log(e.keyCode)

    const audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"`)
        const keys = document.querySelectorAll(`.key[data-key="${e.keyCode}"`)
        
        for (const onStyle of keys) {
            onStyle.style.transition = "background-color 0.s ease-in-out";
            onStyle.style.backgroundColor = "black";
        }
    
        setTimeout(function() {
            for (const onStyle of keys) {
                onStyle.style.transition = "";  
                onStyle.style.backgroundColor = "";
            }
        }, 200);

  
    for(const audios of audio ){
        if(!audios) return;
        audios.currentTime = 0;
        audios.play()
    }

    
})
  

