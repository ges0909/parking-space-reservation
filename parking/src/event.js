function getRotationAngle(el) {
  const style = window.getComputedStyle(el, null);
  // console.log(style)
  const matrix = style.getPropertyValue("transform");
  console.log(matrix);
  let values = matrix.split('(')[1];
  values = values.split(')')[0];
  values = values.split(',');
  // console.log(values);
  const a = values[0];
  const b = values[1];
  const c = values[2];
  const d = values[3];
  // console.log(`a=${a}, b=${b}, c=${c}, d=${d}`)
  const radians = Math.atan2(b, a);
  if (radians < 0) {
    radians += (2 * Math.PI);
  }
  const angle = Math.round(radians * (180 / Math.PI));
  console.log(angle)
  return angle
}

var angle

function rotateX(ev) {
  angle = (angle) ? angle + 20 : 20;
  console.log(angle)
  rectangle = document.querySelector(".rectangle");
  // angle = getRotationAngle(rectangle) + 20;
  rectangle.style.transform = `rotateX(${angle}deg)`;
}

function wheel(ev) { // WheelEvent
  console.log(`dy=${ev.deltaY}`)
}

function move(event) {  // MouseEvent
  console.log(`x=${event.clientX}, y=${event.clientY}`)
}

document.querySelector(".scene").onclick = rotateX;
// document.querySelector(".rectangle").onwheel = wheel;
// document.querySelector(".rectangle").onmousemove = move;

