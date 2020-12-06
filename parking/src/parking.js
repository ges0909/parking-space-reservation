class Parking3D {
  leftButton = false
  rightButton = false

  constructor(x = 200, y = 200, degX = 15, degY = 15, scale = 0.8) {
    this.x = x
    this.y = y
    this.degX = degX
    this.degY = degY
    this.scale = scale
    document.querySelector('.garage').style.transform = this.transform() // initial transform
  }

  transform = () => {
    return `translate3d(${this.x}px, ${this.y}px, 0px) rotateX(${this.degX}deg) rotateY(${this.degY}deg) scale(${this.scale})`
  }

  mousemove = (ev) => {
    // MouseEvent
    let horizontal = Math.abs(ev.movementX) > Math.abs(ev.movementY)
    if (this.leftButton) {
      this.x = horizontal ? this.x + ev.movementX : this.x
      this.y = horizontal ? this.y : this.y + ev.movementY
    } else if (this.rightButton) {
      if (horizontal) {
        this.degY += ev.movementX < 0 ? -1 : 1
      } else {
        this.degX += ev.movementY < 0 ? -1 : 1
      }
    }
    document.querySelector('.garage').style.transform = this.transform()
  }

  mousedown = (ev) => {
    // MouseEvent
    this.leftButton = ev.button == 0
    this.rightButton = ev.button == 2
  }

  mouseup = (ev) => {
    // MouseEvent
    this.leftButton = false
    this.rightButton = false
  }

  wheel = (ev) => {
    // WheelEvent
    if (ev.altKey) {
      this.changeOrder(ev.deltaY)
    } else {
      this.scale = ev.deltaY < 0 ? this.scale - 0.05 : this.scale + 0.05
      document.querySelector('.garage').style.transform = this.transform()
    }
  }

  click = (ev) => {
    // MouseEvent
    console.log(ev.target.value)
  }

  changeOrder = (delta) => {
    let levels = Array.from(document.querySelectorAll('.scene .garage .level'))
    levels = levels.sort((e1, e2) => e1.style.zIndex - e2.style.zIndex)
    // levels.unshift(levels.pop()) // rotate
    if (delta < 0) {
      levels.splice(levels.length - 1, 0, ...levels.splice(0, 1))
    } else {
      levels.splice(0, 0, ...levels.splice(levels.length - 1, 1))
    }
    for (const [index, level] of levels.entries()) {
      level.style.zIndex = index
      level.style.transform = `translateZ(${-200 * index}px`
    }
  }
}

const parking = new Parking3D(
  (x = 300),
  (y = 100),
  (degX = 0),
  (degY = 0),
  (scale = 1.2)
)

document.querySelector('.scene .garage').onmousemove = parking.mousemove
document.querySelector('.scene').onmousedown = parking.mousedown
document.querySelector('.scene').onmouseup = parking.mouseup
document.querySelector('.scene').onwheel = parking.wheel
document.querySelector('.scene').onkeydown = parking.keydown

const lots = document.querySelectorAll('.scene .garage .level .lot')
lots.forEach((lot) => (lot.onclick = parking.click))

document.oncontextmenu = (ev) => {
  ev.preventDefault()
} // suppress context menu
