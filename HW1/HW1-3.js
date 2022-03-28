function reverse(input) {
  const inputArray = input.split("")
  const resultArray = []

  for (let i = 0; i < inputArray.length; i++) {
    resultArray.unshift(inputArray[i])
  }
  
  return resultArray.join("")
}

console.log(reverse("joseph"))