//video player
"use strict";
const video = document.querySelector('.manufacturing__video');
const playButton = document.querySelector('.manufacturing__play-btn')


// Play and Pause video
function videoStatus(){
  if(video.paused){
    video.play()
    playButton.innerHTML = `
          <svg class="svg">
           <use xlink:href="img/svg/sprite.svg#pause"></use>
          </svg>
    `;
   
  }else{
    video.pause()
    playButton.innerHTML = `
          <svg class="svg">
           <use xlink:href="img/svg/sprite.svg#play"></use>
          </svg>
    `;
  }
}

playButton.addEventListener('click',videoStatus);
video.addEventListener('click',videoStatus);

playButton.addEventListener('mousedown', () => {
  playButton.classList.add('pressed');
});

playButton.addEventListener('mouseup', () => {
  playButton.classList.remove('pressed');
})





