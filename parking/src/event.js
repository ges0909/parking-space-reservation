function wheel(e) { // WheelEvent
  console.log(`dy=${e.deltaY}`)
}

function move(e) {  // MouseEvent
  console.log(`x=${e.clientX}, y=${e.clientY}`)
}

function rotateY(e) {
  var deg = deg + 10;
  if (deg == 360) {
    deg = 0;
  }
  level = document.querySelector(".level");
  div.style.transform = 'rotateY(' + deg + 'deg)';
}

document.querySelector(".scene").onwheel = wheel;
document.querySelector(".scene").onmousemove = move;
