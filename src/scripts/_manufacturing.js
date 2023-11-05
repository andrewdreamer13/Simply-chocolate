//video player
"use strict";
const videoBox = document.querySelector('.manufacturing__video-box');
const video = document.querySelector('.manufacturing__video');
const playButton = document.querySelector('.manufacturing__play-btn')
const stopButton = document.querySelector('.manufacturing__stop-btn');
const timer = document.querySelector('.manufacturing__video-time');
const videoControl = document.querySelector('.manufacturing__video-controls');
const btnControlBox = document.querySelector('.manufacturing__btn-box');
const soundProgress = document.querySelector('.manufacturing__sound-progress');
const soundLine = document.querySelector('.manufacturing__sound-progress-line');
const timeProgress = document.querySelector('.manufacturing__video-progress');
const progressLine = document.querySelector('.manufacturing__video-progress-line');



// Play and Pause video
function videoStatus() {

  if (video.paused) {
    video.play();
    playButton.innerHTML = `
          <svg class="svg">
           <use xlink:href="img/svg/sprite.svg#pause"></use>
          </svg>
    `;
    btnControlBox.prepend(playButton);
    playButton.style.position = 'static';
    playButton.style.margin = '0px';
   

  } else {
    video.pause();
    playButton.innerHTML = `
          <svg class="svg">
           <use xlink:href="img/svg/sprite.svg#play"></use>
          </svg>
    `;
    videoBox.prepend(playButton);
    playButton.style.position = 'absolute';
    playButton.style.margin = 'auto';
  }
}

playButton.addEventListener('click', videoStatus);
video.addEventListener('click', videoStatus);

// stop video
function stopVideo() {

  video.currentTime = 0;
  video.pause();
  playButton.innerHTML = `
  <svg class="svg">
   <use xlink:href="img/svg/sprite.svg#play"></use>
  </svg>
`;
  videoBox.prepend(playButton);
  playButton.style.position = 'absolute';
  playButton.style.margin = 'auto';
}

stopButton.addEventListener('click', stopVideo);

// rewind by progress

function rewindVideo() {
  video.currentTime = (timeProgress.value * video.duration) / 100;
}
timeProgress.addEventListener('input', rewindVideo);

// Timer
function upDataProgress() {

  timeProgress.value = (video.currentTime / video.duration) * 100;
  progressLine.style.width = timeProgress.value + '%';

  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }
  timer.innerHTML = `${minutes}:${seconds}`;
}
video.addEventListener('timeupdate', upDataProgress);


// controls visibility

videoBox.addEventListener('mouseenter', () => {
  videoControl.classList.add('manufacturing__video-controls--visible');
});

videoBox.addEventListener('mouseleave', () => {
  videoControl.classList.remove('manufacturing__video-controls--visible');
});

videoBox.addEventListener('touchstart', () => {
  videoControl.classList.add('manufacturing__video-controls--visible');
})

videoBox.addEventListener('touchend', () => {
  setTimeout(() => {
    videoControl.classList.remove('manufacturing__video-controls--visible');
  }, 5000);
 
})



// play pause video on scroll

function stopPlayVideo() {

  const videoObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (video.currentTime === 0) {
        return
      }

      if (!entry.isIntersecting || entry.intersectionRatio <= .2) {
        video.pause();
        playButton.innerHTML = `
              <svg class="svg">
               <use xlink:href="img/svg/sprite.svg#play"></use>
              </svg>
        `;
        videoBox.prepend(playButton);
        playButton.style.position = 'absolute';
        playButton.style.margin = 'auto';

      } else {
        video.play();
        playButton.innerHTML = `
              <svg class="svg">
               <use xlink:href="img/svg/sprite.svg#pause"></use>
              </svg>
        `;
        btnControlBox.prepend(playButton);
        playButton.style.position = 'static';
        playButton.style.margin = '0px';
      }
    })

  }, {
    threshold: .2
  });

  videoObserver.observe(video);

};
stopPlayVideo();

// sound control

function changeSound(e) {
  e.preventDefault();
  video.volume = soundProgress.value / 100;
  soundLine.style.width = soundProgress.value + '%';
}

soundProgress.addEventListener('input', changeSound);

// scale buttons on mousedown

playButton.addEventListener('mousedown', () => {
  playButton.classList.add('pressed');
});

playButton.addEventListener('mouseup', () => {
  playButton.classList.remove('pressed');
});

stopButton.addEventListener('mousedown', () => {
  stopButton.classList.add('pressed');
});

stopButton.addEventListener('mouseup', () => {
  stopButton.classList.remove('pressed');
})

// scale buttons on touches

playButton.addEventListener('touchstart', () => {
  playButton.classList.add('pressed');
});

playButton.addEventListener('touchend', () => {
  playButton.classList.remove('pressed');
});

stopButton.addEventListener('touchstart', () => {
  stopButton.classList.add('pressed');
});

stopButton.addEventListener('touchend', () => {
  stopButton.classList.remove('pressed');
})
