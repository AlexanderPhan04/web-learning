function sumOdd(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 !== 0) sum += num;
  }
  return sum;
}

console.log(sumOdd([1, 2, 3, 4, 5])); // 9
