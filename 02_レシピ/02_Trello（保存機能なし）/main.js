const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = () => {
  //cardを作成して表示する
  const card = createCard(inputElement.value)
  container.append(card)
  //入力欄を空にする
  inputElement.value = ""
}

inputElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    //カードを作成する処理
    const card = createCard(inputElement.value)
    container.append(card)
    //入力欄を空にする
    inputElement.value = ""
  }
})

const createCard = (text) => {
  //カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"
  //テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  //削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  deleteButton.onclick = () => {
    card.remove()
  }
  card.append(deleteButton)
  return card
}
