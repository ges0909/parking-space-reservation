let x = 0;
let y = 0;
let degX = 0;
let degY = 0;
let scale = 1;
let leftButton = false;
let rightButton = false;

const group = document.querySelector(".group");
group.style.transform = transform();

function transform() {
  return `translateX(${x}px) translateY(${y}px) rotateX(${degX}deg) rotateY(${degY}deg) scale(${scale})`;
}

function mousemove(ev) { // MouseEvent
  if (leftButton) {
    if (Math.abs(ev.movementX) > Math.abs(ev.movementY)) {
      x += ev.movementX;
    }
    else {
      y += ev.movementY;
    }
    group.style.transform = transform();
  }
  else if (rightButton) {
    if (Math.abs(ev.movementX) > Math.abs(ev.movementY)) {
      degY += (ev.movementX < 0 ? -1 : 1);
    } else {
      degX += (ev.movementY < 0 ? -1 : 1);
    }
    group.style.transform = transform();
  }
}

function mousedown(ev) { // MouseEvent
  if (ev.button == 0) {
    leftButton = true;
  }
  else if (ev.button == 2) {
    rightButton = true;
  }
}

function mouseup(ev) { // MouseEvent
  if (ev.button == 0) {
    leftButton = false;
  }
  else if (ev.button == 2) {
    rightButton = false;
  }
}

function wheel(ev) { // WheelEvent
  scale = (ev.deltaY < 0) ? scale - 0.05 : scale + 0.05;
  group.style.transform = transform();
}

document.querySelector(".scene").onmousemove = mousemove;
document.querySelector(".scene").onmousedown = mousedown;
document.querySelector(".scene").onmouseup = mouseup;
document.querySelector(".scene").onwheel = wheel;

