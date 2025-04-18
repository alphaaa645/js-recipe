const figure = document.getElementById("figure")
const circleButton = document.getElementById("circle-button")
const squareButton = document.getElementById("square-button")
circleButton.onclick = () => {
  figure.classList.add("rounded")
}
squareButton.onclick = () => {
  figure.classList.remove("rounded")
}
