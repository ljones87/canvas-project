const catImage = new Image()
catImage.src = 'assets/cat.png'

const dogImage = new Image()
dogImage.src = 'assets/dog.png'

let isDragging = false
let activeImage = null

const images = [
  {
    file: catImage,
    x: 0,
    y: 10,
    width: 100,
    height: 100,
  },
  {
    file: dogImage,
    x: 0,
    y: 300,
    width: 100,
    height: 100,
  },
]

const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
// 16:9 aspect ratio
canvas.height = (window.innerWidth * 9) / 16

const canvasLeft = canvas.offsetLeft
const canvasTop = canvas.offsetTop

let startX, startY

const getImageName = (image) => {
  const imageName = image.src.split('/').slice(-1)[0].split('.')[0]
  return imageName
}

const onImage = (x, y, image) => {
  const imageLeft = image.x
  const imageTop = image.y
  const imageRight = imageLeft + image.width
  const imageBottom = imageTop + image.height

  return x >= imageLeft && x <= imageRight && y >= imageTop && y <= imageBottom
}

const mouseDown = (e) => {
  const { clientX, clientY } = e
  startX = parseInt(clientX)
  startY = parseInt(clientY)
  e.preventDefault()
  isDragging = true
  const matchingImage = images.findIndex((image) => onImage(startX, startY, image))
  if (matchingImage > -1) {
    activeImage = matchingImage
  }
}

const mouseUp = (e) => {
  if (!isDragging) {
    return
  } else {
    e.preventDefault()
    isDragging = false
  }
}

const mouseMove = (e) => {
  e.preventDefault()
  const mouseX = parseInt(e.clientX)
  const mouseY = parseInt(e.clientY)
  if (!isDragging) {
    return
  } else {
    const dx = mouseX - startX
    const dy = mouseY - startY

    const currentImage = images[activeImage]
    currentImage.x = currentImage.x += dx
    currentImage.y = currentImage.y += dy
    drawImage()
    startX = mouseX
    startY = mouseY
  }
}

canvas.onmousedown = mouseDown
canvas.onmouseup = mouseUp
canvas.onmouseout = mouseUp
canvas.onmousemove = mouseMove

const drawImage = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  images.forEach((image) => {
    ctx.drawImage(image.file, image.x, image.y, image.height, image.width)
  })
}

window.onload = drawImage
