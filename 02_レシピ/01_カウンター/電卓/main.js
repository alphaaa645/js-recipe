const firstNumber = document.getElementById("input1")
const secondNumber = document.getElementById("input2")
const button = document.getElementById("Equal")
const resultDisplay = document.getElementById("result")

button.onclick = () => {
  const num1 = Number(firstNumber.value)
  const num2 = Number(secondNumber.value)
  const result = num1 + num2
  resultDisplay.textContent = result
}
