// O(n)
// Operations required to complete grows proportionally with n in a linear fashion
const sum1toNwithForLoop = (n) => {
  let total = 0;
  for (i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// O(1)
// Operations required to complete is constant
const sum1toNwithFormula = (n) => {
  return n * (n + 1) / 2;
}


// O(n)
// Even though more operations are required relative to n vs. sum1toNwithForLoop, 
// it is expressed as O(n) because growth is still linear
const countUpAndDownWithForLoops = (n) => {
  let total = 0;
  for (i = 0; i < n; i++) {
    total += i;
  }
  for (j = n; j > 0; j--) {
    total += j;
  }
  return total;
}

// O(n^2)
// Operations required grows quadratically with n
// Inner loop runs n times inside n iterations of outer loop (n*n)
const getAllPairsFrom0toNwithNestedLoops = (n) => {
  const pairsArray = [];
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      pairsArray.push([i, j]);
    }
  }
  return pairsArray;
}