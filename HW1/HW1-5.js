function convertToVowels(inputString) {
  const vowelArray = ["a","e","i","o","u"]
  
  const inputArray = inputString.split("")
  const resultArray = []

  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < vowelArray.length; j++) {
      if (inputArray[i] == vowelArray[j]) {
        resultArray.push(inputArray[i])
      }
    }
  }

  const resultString = resultArray.join("")
  return resultString
}

console.log(convertToVowels("hello world"))
console.log(convertToVowels("i am gnation"))