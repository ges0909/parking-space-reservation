class Parking {
  x = 0;
  y = 0; // 25;
  degX = 0; // 60;
  degY = 0;
  scale = 1; // .7;
  leftButton = false;
  rightButton = false;

  constructor() {
    this.garage = document.querySelector(".garage");
    this.garage.style.transform = this.transform();
  }

  transform = () => {
    return `translate3d(${this.x}px, ${this.y}px, 0px) rotateX(${this.degX}deg) rotateY(${this.degY}deg) scale(${this.scale})`;
  }

  mousemove = (ev) => { // MouseEvent
    if (this.leftButton) {
      if (Math.abs(ev.movementX) > Math.abs(ev.movementY)) {
        this.x += ev.movementX;
      }
      else {
        this.y += ev.movementY;
      }
      this.garage.style.transform = this.transform();
    }
    else if (this.rightButton) {
      if (Math.abs(ev.movementX) > Math.abs(ev.movementY)) {
        this.degY += (ev.movementX < 0 ? -1 : 1);
      } else {
        this.degX += (ev.movementY < 0 ? -1 : 1);
      }
      this.garage.style.transform = this.transform();
    }
  }

  mousedown = (ev) => { // MouseEvent
    this.leftButton = ev.button == 0;
    this.rightButton = ev.button == 2;
  }

  mouseup = (ev) => { // MouseEvent
    this.leftButton = false;
    this.rightButton = false
  }

  wheel = (ev) => { // WheelEvent
    this.scale = (ev.deltaY < 0) ? this.scale - 0.05 : this.scale + 0.05;
    this.garage.style.transform = this.transform();
  }

  click = (ev) => { // MouseEvent
    console.log("clicked")
  }

}

const parking = new Parking();

document.querySelector(".scene").onmousemove = parking.mousemove;
document.querySelector(".scene").onmousedown = parking.mousedown;
document.querySelector(".scene").onmouseup = parking.mouseup;
document.querySelector(".scene").onwheel = parking.wheel;

document.oncontextmenu = (ev) => { return ev.preventDefault(); } // suppress context menu
