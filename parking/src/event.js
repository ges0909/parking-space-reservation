var x = 0;
var y = 0;
var angleX = 0;
var angleY = 0;
var scale = 1;
var leftButton = false;
var rightButton = false;

const rectangle = document.querySelector(".rectangle");
rectangle.style.transform = `translateX(${x}px) translateY(${y}px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(${scale})`;

function mousemove(ev) { // MouseEvent
  if (leftButton) {
    if (Math.abs(ev.movementX) > Math.abs(ev.movementY)) {
      x += ev.movementX;
    }
    else {
      y += ev.movementY;
    }
    rectangle.style.transform = `translateX(${x}px) translateY(${y}px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(${scale})`;
  }
  else if (rightButton) {
    if (Math.abs(ev.movementX) > Math.abs(ev.movementY)) {
      angleY += (ev.movementX < 0 ? -1 : 1);
    } else {
      angleX += (ev.movementY < 0 ? -1 : 1);
    }
    rectangle.style.transform = `translateX(${x}px) translateY(${y}px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(${scale})`;
  }
}

function mousedown(ev) {
  if (ev.button == 0) {
    leftButton = true;
  }
  else if (ev.button == 2) {
    rightButton = true;
  }
}

function mouseup(ev) {
  if (ev.button == 0) {
    leftButton = false;
  }
  else if (ev.button == 2) {
    rightButton = false;
  }
}

function wheel(ev) { // WheelEvent
  scale = (ev.deltaY < 0) ? scale - 0.05 : scale + 0.05;
  rectangle.style.transform = `scale(${scale}) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
}

document.querySelector(".scene").onmousemove = mousemove;
document.querySelector(".scene").onmousedown = mousedown;
document.querySelector(".scene").onmouseup = mouseup;
document.querySelector(".scene").onwheel = wheel;

