const imageElement = document.getElementById("dog-image")
const changeButton = document.getElementById("change-button")

//指定したサーバーにデータを取りに行く
const randomDogImage = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      //messageはデータの画像URLを指す
      imageElement.src = data.message
    })
}

changeButton.addEventListener("click", randomDogImage, false)

window.onload = randomDogImage
