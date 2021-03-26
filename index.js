const bubbleSort = (input) => {
  const output = [...input]

  for (let i = 0; i < output.length; i++) {
    for(let j = 0; j < output.length - i - 1; j++) {
      const a = output[j]
      const b = output[j + 1]
      if(a > b) {
        const temp = a
        output[j] = b
        output[j + 1] = temp
      }
    }
  }

  return output
}

console.log(bubbleSort(
  [4,2,1,10,43,23,321,5]
))