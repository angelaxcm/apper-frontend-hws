function isPalindrome(inputString) {
  const inputStringAdj = inputString.toLowerCase()
  const inputArray = inputStringAdj.split("")
  const resultArray = []

  for (let i = 0; i < inputArray.length; i++) {
    resultArray.unshift(inputArray[i])
  }
  
  const reverseString = resultArray.join("")

  if (inputStringAdj == reverseString) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("RaceCar"))
console.log(isPalindrome("Angela"))