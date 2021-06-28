let prevInput = '0'
let calculationOperator = ''
let currentInput = '0'

const inputNumber = (number) => {
  if (currentInput === '0') {
    currentInput = number
  } else {
    currentInput += number
  }
}

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevInput = currentInput
  }
  calculationOperator = operator
  currentInput = '0'
}

const inputDecimal = (dot) => {
  if(currentInput.includes('.')) {
    return
  }
  currentInput += dot
}

const getPercentage = () => {
  currentInput = currentInput / 100
}

const calculate = () => {
  let result = 0
  switch(calculationOperator) {
    case '+':
      result = parseFloat(prevInput) + parseFloat(currentInput)
      break
    case '-':
      result = parseFloat(prevInput) - parseFloat(currentInput)
      break
    case '*':
      result = parseFloat(prevInput) * parseFloat(currentInput)
      break
    case '/':
      result = parseFloat(prevInput) / parseFloat(currentInput)
      break
    default:
      return
  }
  currentInput = result.toString()
  calculationOperator = ''
  prevInput = '0'
}

const clearAll = () => {
  prevInput = '0'
  calculationOperator = ''
  currentInput = '0'
}

const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen = (number) => {
  calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener(("click"), (event) => {
    inputNumber(event.target.value)
    updateScreen(currentInput)
  })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
    updateScreen(calculationOperator)
  })
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener("click", () => {
  calculate()
  updateScreen(currentInput)
})

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener("click", () => {
  clearAll()
  updateScreen(currentInput)
})

const decimal = document.querySelector(".decimal")

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentInput)
})

const percentage = document.querySelector(".percentage")

percentage.addEventListener("click", (event) => {
  getPercentage()
  updateScreen(currentInput)
})
