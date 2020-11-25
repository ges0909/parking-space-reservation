var scale = 1
var angleX = 0
var angleY = 0

const rectangle = document.querySelector(".rectangle");

function scale2d(ev) { // WheelEvent
  scale = (ev.deltaY < 0) ? scale - 0.05 : scale + 0.05;
  rectangle.style.transform = `scale(${scale}) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
}

function rotateXY(ev) { // MouseEvent
  angleY += (ev.movementX / 2);
  angleX += (ev.movementY / 2);
  rectangle.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(${scale})`;
}

function move(ev) {  // MouseEvent
  // console.log(ev)
  // console.log(`x=${ev.x}, y=${ev.y}`)
  console.log(`x=${ev.movementX}, y=${ev.movementY}`)
}

document.querySelector(".scene").onwheel = scale2d;
document.querySelector(".scene").onmousemove = rotateXY;
