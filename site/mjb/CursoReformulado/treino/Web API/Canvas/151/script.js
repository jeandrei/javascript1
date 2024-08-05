const canvas = document.getElementById('my-canvas');

// create a context for our canva
const ctx = canvas.getContext('2d');

// Drow rectangle
//fill something strokeStyle is the color of the line
ctx.fillStyle = 'green';
//fillRect(x,y,width,height)
ctx.fillRect(10 , 10, 150, 100)

//if we set fillStyle color, everything that comes after that will be that color
ctx.fillStyle = 'red';

// Draw a circle
// arc(x,y,radio,start angle, end angle)
ctx.arc(300, 300, 100, 0, Math.PI * 2);
// fill get the color set in the previous fillStyle
ctx.fill();


// Draw lines 
ctx.beginPath();
ctx.strokeStyle = 'orange';
// the width of the line
ctx.lineWidth = 5;
// x and y where it starts
ctx.moveTo(10, 10);
// x and y where it goes to
ctx.lineTo(300, 300);
// the color of the line must be stroke fill is to fill objects like circle or rectangle
ctx.stroke();

// Draw text
ctx.font = '30px Arial';
ctx.fillStyle = 'blue';
//fillText('texto', x, y, maxWidth)
ctx.fillText('Hello World', 300, 100, 300)


//Also can use strokeText
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;
ctx.strokeText('Hello World', 300, 500, 300);

// Draw image
const image = document.querySelector('img');
image.style.display = 'none';
//as soon as the image loads call a function and draw the image
//drawImage(image, x, y, width, height)
image.addEventListener('load', () => ctx.drawImage(image, 250, 250, 100, 100));

