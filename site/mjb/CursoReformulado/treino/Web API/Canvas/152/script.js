const image = document.querySelector('img')
let start;
let done = false;

//1 lets say timestamp is 78.4 in the first iteration
//2 in the secont iteration let's say timestamp is 95
function step(timestamp) {
  //2 in the second iteration start is defined this bloc don't run
  if(start === undefined){
    //1 start gets 78.4 and timestamp is 78.4
    start = timestamp;
  }


  //1 in the first iteration enlapsed = 78.4 - 78.4 iqual to zero
  //2 in the second iteration enlapsed = 95 - 78.4 = 16.59
  const elapsed = timestamp - start;  

  //1 will be false done still is false
  if(elapsed > 5000){
    done = true;
  }

  if (done){
    return;
  }

  //1 will position the image in 0/20 is zero and rotate is 0/20 is zero
  //2 in the second iteration the position will be 16.60/20 = 0,83
  console.log(`elapsed ${elapsed} elapsed/20 ${elapsed/20} - start ${start} - timestamp ${timestamp}`);
  image.style.transform = `translateX(${elapsed / 20}px) rotate(${elapsed / 20}deg)`;//deg degrees
 
  requestAnimationFrame(step);
}

requestAnimationFrame(step);