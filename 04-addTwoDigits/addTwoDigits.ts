function addTwoDigits(n: any): number {
  const nums = n.toString().split('');

  return nums.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  });
}

console.log(addTwoDigits(3575634));
