// primitives are constant space

// Strings require O(n) space, where n is string length

// Reference types are also typically O(n) where n is the number of keys

// O(1) space.  Space used is constant as input grows
const sum = (arrayToSum) => {
    let total = 0;
    for (i = 0; i < arrayToSum.length; i++) {
        total += arrayToSum[i];
    }
    return total;
};

// O(n) space. Space used grows proportionally with input
const double = (arrayToDouble) => {
    const doubledArray = [];
    for (i = 0; i < arrayToDouble.length; i++){
        doubledArray.push(arrayToDouble[i] * 2);
    }
    return doubledArray;
};