const figure = document.getElementById("figure")

const shapes = ["square", "circle", "triangle"]
let currentShape = 0

figure.onclick = () => {
  figure.classList.remove(shapes[currentShape])
  currentShape = (currentShape + 1) % shapes.length
  figure.classList.add(shapes[currentShape])
}
