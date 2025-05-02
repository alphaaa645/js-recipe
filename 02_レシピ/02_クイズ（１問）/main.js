const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

//クイズの内容
//オブジェクトと配列が使われている
const quiz = {
  text: "この星の名前はなんでしょう",
  img: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}

//選択肢のボタンの作成

const choicesContainer = document.getElementById("choices-container")
for (let i = 0; i < quiz.choices.length; i++) {
  const choiceButton = document.createElement("button")
  choiceButton.textContent = quiz.choices[i].text
  choicesContainer.append(choiceButton)
  choiceButton.onclick = () => {
    feedback.textContent = quiz.choices[i].feedback
  }
}

// 選択肢の数分（quizのchoicesの数）だけボタンを表示するには、どんなJavascriptのコードを書けばよい？

//クイズの表示
const reloadQuiz = () => {
  //問題文を表示
  quizText.textContent = "Q" + quiz.text

  //画像を表示
  quizImage.src = "./images/" + quiz.img

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

const choose = (choiceNumber) => {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = () => {
  choose(0)
}
choice2.onclick = () => {
  choose(1)
}
choice3.onclick = () => {
  choose(2)
}

reloadQuiz()
