function clock(){
  const now = new Date();
  const canvas = document.getElementById('canvas');  
  const ctx = canvas.getContext('2d');

  // Setup canvas
  ctx.save(); // save the default state  
  ctx.clearRect(0, 0, 500, 500); //clearRect(x,y,widht,height)  
  ctx.translate(250,250); //will put 0,0 in the middle  
  ctx.rotate(-Math.PI / 2); //rotate clock -90deg
  //Set default style
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Draw clock face/border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#800000';
  ctx.arc(0,0,142,0,Math.PI * 2, true);//arc(x,y,radius,startAngle,endAngle)
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Draw hour lines
  ctx.save();
  for(let i = 0; i< 12; i++){
    ctx.beginPath();
    ctx.rotate(Math.PI / 6)
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
    ctx.stroke();
  }  
  ctx.restore();
  
  // Draw minut lines
  ctx.save();
  ctx.lineWidth = 4;
  for(let i = 0; i< 60; i++){
    if(i % 5 !== 0){
      ctx.beginPath();      
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    } //@todo 16:19 
    ctx.rotate(Math.PI / 30);  
  }  
  ctx.restore();

  ctx.restore(); //restore default state
}

clock();