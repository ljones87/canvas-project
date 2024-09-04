const catImage = new Image()
catImage.src = 'assets/cat.png'

const catMotion = new Image()
catMotion.src = 'assets/cat-running.jpg'

const dogImage = new Image()
dogImage.src = 'assets/dog.png'

const dogMotion = new Image()
dogMotion.src = 'assets/dog-running.png'

const images = [
  {
    file: catImage,
    drag: catMotion,
    x: 5,
    y: 5,
    width: 150,
    height: 120,
  },
  {
    file: dogImage,
    drag: dogMotion,
    x: 175,
    y: 5,
    width: 150,
    height: 100,
  },
]

const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
// 16:9 aspect ratio
canvas.height = (window.innerWidth * 9) /16

const canvasLeft = canvas.offsetLeft
const canvasTop = canvas.offsetTop

let startX, startY
let isDragging = false
let activeImage = null

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
   e.preventDefault()
  const { clientX, clientY } = e
  // current event x/y coordinates
  startX = parseInt(clientX)
  startY = parseInt(clientY)
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
    activeImage = null
    drawImage()
  }
}

const mouseMove = (e) => {
  e.preventDefault()

  const mouseX = parseInt(e.clientX)
  const mouseY = parseInt(e.clientY)

  if (!isDragging) {
    return
  } else {
    const differenceInPixelsX = mouseX - startX
    const differenceInPixelsY = mouseY - startY

    const currentImage = images[activeImage]
    const newX = currentImage.x = currentImage.x += differenceInPixelsX
    const newY = currentImage.y = currentImage.y += differenceInPixelsY

    // Ensure the new position is within the canvas boundaries
    currentImage.x = Math.max(0, Math.min(newX, canvas.width - currentImage.width));
    currentImage.y = Math.max(0, Math.min(newY, canvas.height - currentImage.height));

    drawImage()

    startX = mouseX
    startY = mouseY
  }
}

const drawImage = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  images.forEach((image, i) => {
    if (i === activeImage && isDragging) {
      ctx.drawImage(image.drag, image.x, image.y, image.width, image.height)
      ctx.beginPath();
      ctx.rect(image.x, image.y, image.width, image.height);
      ctx.strokeStyle = 'green';
      ctx.lineWidth = 2;
      ctx.stroke();
    } else {
      ctx.drawImage(image.file, image.x, image.y, image.width, image.height)
    }
  })
}


canvas.onmousedown = mouseDown
canvas.onmousemove = mouseMove
canvas.onmouseout = mouseUp
canvas.onmouseup = mouseUp

window.onload = drawImage
