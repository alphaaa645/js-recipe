const genkiFunction = (number) => {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 || n.toString().includes("3")) {
      console.log(n + "!!!!!!")
    } else {
      console.log(n)
    }
  }
}
genkiFunction(58)
