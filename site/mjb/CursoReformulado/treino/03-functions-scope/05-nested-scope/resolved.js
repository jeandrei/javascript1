//Seção 4 aula 39
function first() {
  const x = 100

  function second() {
    const y = 200
    //you can access parent values x
    console.log(x + y)
  }
  // but you can't access child values y
  // console.log(y);

  second()
}

first()

if (true) {
  const x = 100

  if (x === 100) {
    const y = 200
    // you can access parent
    console.log(x + y)
  }
  // you can't access child
  console.log(y)
}
