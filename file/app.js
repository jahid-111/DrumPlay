// console.log("file.js");


// const keyBox = document.getElementById('a')


window.addEventListener('keydown', function(e){
    // console.log(e.keyCode)

    const audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"`)
    
    
    for(const audios of audio ){
        console.log(audios)


        if(!audios) return;
        audios.currentTime = 0;
        audios.play()

    }


 
    
})
  

