const catImage = document.getElementById("cat-image")

fetch("https://api.thecatapi.com/v1/images/search", {
  headers: {
    "x-api-key": "YOUR_API_KEY", // ここに自分のAPIキーを入力
  },
})
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    catImage.src = data[0].url
  })
