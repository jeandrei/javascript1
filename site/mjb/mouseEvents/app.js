// Aula 30
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
//clearBtn.addEventListener('click', runEvent);

// Double Click
//clearBtn.addEventListener('dblclick',runEvent);

// MOusedown - click and hold
//clearBtn.addEventListener('mousedown',runEvent);

// Mouseup - click and hold when release fires of
//clearBtn.addEventListener('mouseup',runEvent);

// Mouse enter - mouse enter the area
//card.addEventListener('mouseenter',runEvent);

// Mouse leave - mouse exit the area
//card.addEventListener('mouseleave',runEvent);

// Mouse over - mouse enter the area even from other element in the same area
//card.addEventListener('mouseover',runEvent);

// Mouse out - mouse exit the area even other element in the same area
//card.addEventListener('mouseout',runEvent);

// Mouse move
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}