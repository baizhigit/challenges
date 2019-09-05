function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDiff = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let absoluteDiff = Math.abs(inputArray[i] - inputArray[i + 1]);

    maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
  }

  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([10, 4, 7, 6, 5, 20]));
