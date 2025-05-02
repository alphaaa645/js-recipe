const imageElement = document.getElementById("dog-image")

//指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    //messageはデータの画像URLを指す
    imageElement.src = data.message
  })
