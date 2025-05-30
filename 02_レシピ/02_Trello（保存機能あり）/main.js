const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

let list = JSON.parse(localStorage["list"] || "[]")

//追加ボタンを押したら
addButton.onclick = () => {
  //テキストを取り出す
  const text = inputElement.value

  //listにテキストを追加する
  list.push(text)

  //localStorageを更新する
  localStorage["list"] = JSON.stringify(list)

  //カードを追加する
  const card = createCard(text)
  container.append(card)

  //入力欄を空にする
  inputElement.value = ""
}

//共通の処理：テキストからカードを作成する
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

  //削除ボタンを押したら
  deleteButton.onclick = () => {
    let index = 0
    //カードを一枚ずつ関数にあてはめる
    for (const child of container.children) {
      if (child === card) {
        //index番目から1個の要素を削除する
        list.splice(index, 1)
        break
      }
      index++
    }

    //localStrageを更新する
    localStorage["list"] = JSON.stringify(list)

    //カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}

//画面読み込み時、localStorageをもとにカードを追加する
const fragment = document.createDocumentFragment()
for (const text of list) {
  const card = createCard(text)
  fragment.append(card)
}
container.append(fragment)

//createDocumentとは？
//なんでlocalstorageを更新した後にカードを削除しているの？
//このコード上でのfrangmentの役割は？何を指している？
