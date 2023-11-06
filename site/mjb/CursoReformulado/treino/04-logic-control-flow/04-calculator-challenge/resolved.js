// Seção 05 aula 51
function calculator(num1, num2, operator) {
  let result

  switch (operator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      result = num1 / num2
      break
    default:
      result = 'Invalid Operator'
  }

  console.log(result)
  return result
}

calculator(5, 2, '&')
