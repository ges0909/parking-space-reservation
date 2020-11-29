class Parking {
  x = 0;
  y = 0; // 25;
  degX = 0; // 60;
  degY = 0;
  scale = 1; // .7;
  leftButton = false;
  rightButton = false;
  metaKey = false;

  constructor() {
    this.garage = document.querySelector(".garage");
    this.garage.style.transform = this.transform();
  }

  transform = () => {
    return `translate3d(${this.x}px, ${this.y}px, 0px) rotateX(${this.degX}deg) rotateY(${this.degY}deg) scale(${this.scale})`;
  }

  mousemove = (ev) => { // MouseEvent
    let horizontal = Math.abs(ev.movementX) > Math.abs(ev.movementY);
    if (this.leftButton) {
      this.x = horizontal ? this.x + ev.movementX : this.x;
      this.y = horizontal ? this.y : this.y + ev.movementY;
    }
    else if (this.rightButton) {
      if (horizontal) {
        this.degY += (ev.movementX < 0 ? -1 : 1);
      } else {
        this.degX += (ev.movementY < 0 ? -1 : 1);
      }
    }
    else if (this.metaKey) {

    }
    this.garage.style.transform = this.transform();
  }

  mousedown = (ev) => { // MouseEvent
    this.leftButton = ev.button == 0;
    this.rightButton = ev.button == 2;
    this.metaKey = ev.metaKey
  }

  mouseup = (ev) => { // MouseEvent
    this.leftButton = false;
    this.rightButton = false;
    this.metaKey = ev.metaKey;
  }

  wheel = (ev) => { // WheelEvent
    this.scale = (ev.deltaY < 0) ? this.scale - 0.05 : this.scale + 0.05;
    this.garage.style.transform = this.transform();
  }

  click = (ev) => { // MouseEvent
    console.log(ev.target.value)
  }

}

const parking = new Parking();

document.querySelector(".scene").onmousemove = parking.mousemove;
document.querySelector(".scene").onmousedown = parking.mousedown;
document.querySelector(".scene").onmouseup = parking.mouseup;
document.querySelector(".scene").onwheel = parking.wheel;

lots = document.querySelectorAll(".lot");
lots.forEach(lot => lot.onclick = parking.click);

document.oncontextmenu = (ev) => { return ev.preventDefault(); } // suppress context menu
