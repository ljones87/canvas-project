
 // Get the canvas element
 const canvas = document.getElementById('myCanvas');
 const ctx = canvas.getContext('2d');
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 // Example: Draw a simple rectangle

const cat = document.getElementById('catImg');

 const drawImage = () => {
    ctx.drawImage(cat, 100, 100, 100, 100);
 }

 drawImage();