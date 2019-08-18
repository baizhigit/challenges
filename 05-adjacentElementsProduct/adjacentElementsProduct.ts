function adjacentElementsProduct(inputArray: number[]): number {
  let largestProduct = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];

    largestProduct = largestProduct < product ? product : largestProduct;
  }
  return largestProduct;
}

console.log(adjacentElementsProduct([3, 1, 8, 2, 7, -4, 3]));
