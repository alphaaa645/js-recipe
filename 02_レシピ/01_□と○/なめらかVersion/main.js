const figure = document.getElementById("figure")

figure.onmouseenter = () => {
  figure.classList.add("rounded")
}
figure.onmouseleave = () => {
  figure.classList.remove("rounded")
}
