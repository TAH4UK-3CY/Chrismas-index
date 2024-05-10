let video = document.getElementById('video');
let button = document.getElementById('video-button')
let snow = document.getElementById('snow')

function snowFall(){
    snow.style.animationDuration = "1s";
    setTimeout(function() {
        snow.style.animationDuration = "105s"; 
        img.parentNode.removeChild(img);
    }, 2000);
    img = document.createElement('img')
    img.style.height='400px';
    img.style.position = 'absolute';  
    img.style.top = '45vh';
    img.style.left = '20vw';
    img.src='/img/santa.png'
    document.body.appendChild(img);
}


document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audio');
    audioPlayer.volume = 0.30; // Вштановлює гучність на 30%
});

button.addEventListener('click', ()=>{
    if(video.paused){
        video.play();
        console.log("start")
    }
    else{
        video.pause()
        console.log("pause")
    }
})

function filterImages(category) {
    const images = document.querySelectorAll('.photo');
    
    images.forEach(image => {
        if (category === 'all' || image.classList.contains(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}





