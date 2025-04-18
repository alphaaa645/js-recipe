const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const doubleButton = document.getElementById("double-button")
let count = 0
//ボタンをクリックしたときの処理を登録（関数）
plusButton.onclick = () => {
  //countを更新
  count += 1
  //countを表示
  display.textContent = count
}
minusButton.onclick = () => {
  count -= 1
  display.textContent = count
}
doubleButton.onclick = () => {
  count *= 2
  display.textContent = count
}
