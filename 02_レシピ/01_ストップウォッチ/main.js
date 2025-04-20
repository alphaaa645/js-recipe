const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = () => {
  count += 1
  display.textContent = count / 100
}

let id = null

//処理間隔の単位はミリ秒
//setInterval(関数,処理間隔)
button.onclick = () => {
  if (id === null) {
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
