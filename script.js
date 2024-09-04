
const catImage = new Image();
catImage.src = 'assets/cat.png';

const dogImage = new Image();
dogImage.src = 'assets/dog.png';
 
const canvas = document.getElementById('myCanvas') 
const ctx = canvas.getContext('2d');


 canvas.width = window.innerWidth;
 // 16:9 aspect ratio
 canvas.height = (9 *window.innerHeight)/16;


 const drawImage = () => {
    ctx.drawImage(catImage, 10, 10, 100, 100);
    ctx.drawImage(dogImage, 10, 300, 100, 100);
 }

window.onload = drawImage;

