const input = document.getElementById("input")
const container = document.getElementById("container")
const addButton = document.getElementById("add-button")
const deleteButton = document.getElementById("delete-button")
// 状態を表現する変数
let list = []

if (localStorage.list) {
  // 状態の更新 list: [] -> ["こんにちは"]
  list = JSON.parse(localStorage.list)

  // 状態の変化を画面に表示する
  for (const text of list) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    container.append(card)
  }
}

addButton.onclick = function () {
  const text = input.value

  // 状態の更新 list: ["こんにちは"] -> ["こんにちは", "こんばんは"]
  list.push(text)
  localStorage.list = JSON.stringify(list)

  // 状態の変化を画面に表示する
  const card = document.createElement("div")
  card.className = "card"
  card.textContent = text
  container.append(card)

  input.value = ""
}

// ページを表示するとき（保存されたリストがあれば）
list = JSON.parse(localStorage.list)

// カードを追加するとき
list.push(text)
