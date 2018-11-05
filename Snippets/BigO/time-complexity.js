// O(n)
// Operations required to complete grows proportionally with n in a linear fashion
const sum1toNwithForLoop = (n) => {
  let total = 0;
  for (i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

// O(1)
// Operations required to complete is constant
const sum1toNwithFormula = (n) => {
  return n * (n + 1) / 2;
};


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
};

// O(n^2)
// Operations required grows quadratically with n
// Inner loop runs n times for each of n iterations of outer loop (n*n)
const getAllPairsFrom0toNwithNestedLoops = (n) => {
  const pairsArray = [];
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      pairsArray.push([i, j]);
    }
  }
  return pairsArray;
};

// in big O notation, arithmetic, constants and smaller terms are removed
// e.g. O(5n) -> O(n)
// O(3) -> O(1)
// O(3n^2 + 7n + 10) -> O(n^2)

// in a loop, the complexity is the loop length times its inner complexity


// Despite having a lower bound, this is still just an O(n) growth pattern
const countToAtLeast5 = (n) => {
  let position = 0;
  for (i = 1; i <= Math.max(5, n); i++) {
    position = i;
  }
  return position;
};

// Upper bound means no growth beyond 5, so this is constant -- O(1)
const countToAtMost5 = (n) => {
  let position = 0;
  for (i = 1; i <= Math.min(5, n); i++) {
    position = i;
  }
  return position;
};