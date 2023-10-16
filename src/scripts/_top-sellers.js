// touch slider

const slider = document.querySelector('.top-sellers__images');
 const track = document.querySelector('.top-sellers__images-track');


let initialPosition = null;
let moving = false;
let transform = 0;

function funcStart(e) {
  //  slider.style.cursor = 'grabbing';
  initialPosition = e.pageX;
  moving = true;
  const transformation = window.getComputedStyle(track).getPropertyValue('transform');
  if (transformation !== 'none') {
    transform = parseInt(transformation.split(',')[4].trim());
  }
}

function funcMove(e) {
  if (moving) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition;
    track.style.transform = `translateX(${transform + diff}px)`;
    checkBoundary();
  }
}

function funcEnd(e) {
  //  slider.style.cursor = 'grab';
   moving = false;
}

// stop left and right function
function checkBoundary() {
  let outer = slider.getBoundingClientRect();
  let inner = track.getBoundingClientRect();

  if (inner.left > 0) {
    track.style.transform = 'translate(-' + 0 + 'px)';
  } else if (inner.right < outer.right) {
    track.style.transform = `translateX(-${inner.width - outer.width}px`;
  }
}

if (window.PointerEvent) {
  slider.addEventListener('pointerdown', funcStart);
  slider.addEventListener('pointermove', funcMove);
  slider.addEventListener('pointerup', funcEnd);

} else {
  slider.addEventListener('touchstart', funcStart);
  slider.addEventListener('touchmove', funcMove);
  slider.addEventListener('touchend', funcEnd);
  slider.addEventListener('mousedown', funcStart);
  slider.addEventListener('mousemove', funcMove);
  slider.addEventListener('mouseup', funcEnd);
}


