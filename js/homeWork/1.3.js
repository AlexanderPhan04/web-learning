function countOccurrences(arr) {
  const result = {};
  for (let item of arr) {
    result[item] = (result[item] || 0) + 1;
  }
  return result;
}

console.log(countOccurrences(['a', 'b', 'a', 'c', 'b', 'a']));
// { a: 3, b: 2, c: 1 }
