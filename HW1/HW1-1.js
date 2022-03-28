function transform(intArray) {
  const invalidInput = "Invalid Input: Not an integer."
  let isValid = true
  
  intArray.forEach((num,index) => {
    if (!Number.isInteger(num)) {
      isValid = false
    }
  })

  if (!isValid) {
    return invalidInput
  } else {
    const finalArray = intArray.map(num => num*num)
  
    finalArray.sort(function(a, b) {
      return a - b
    })

    return finalArray
  }
}

console.log(transform([1,9,2,8,3]))
console.log(transform([1,"a","b"]))