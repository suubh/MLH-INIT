const sound= document.querySelector('.play-sound-btn');
let audio = document.querySelector('#audio');
sound.addEventListener('click',()=>{
    audio.play();
});