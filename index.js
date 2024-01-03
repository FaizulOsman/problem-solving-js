const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];

/* ============ How to remove duplicate elements from this array? ============ */
// Solution 1:
const uniqueArray1 = [];
for (let i = 0; i < arr.length; i++) {
  if (uniqueArray1.indexOf(arr[i]) === -1) {
    uniqueArray1.push(arr[i]);
  }
}
console.log(uniqueArray1);

// Solution 2:
const uniqueSet = new Set(arr);
const uniqueArray2 = Array.from(uniqueSet);
console.log(uniqueArray2);

/* ============ How to find out the largest/lowest elements from this array? ============ */
// Solution 1:
let largestElement1 = arr[0];
let lowestElement1 = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largestElement1) {
    largestElement1 = arr[i];
  } else if (arr[i] < lowestElement1) {
    lowestElement1 = arr[i];
  }
}
console.log("Largest Element:", largestElement1);
console.log("Lowest Element:", lowestElement1);

// Solution2:
const largestElement2 = Math.max(...arr);
const lowestElement = Math.min(...arr);

console.log("Largest Element:", largestElement2);
console.log("Lowest Element:", lowestElement);

/* ============ How to slice (22, 48) from this array? ============ */
// Solution:
const startIndex = arr.indexOf(22);
const endIndex = arr.indexOf(48) + 1;

const subArray = arr.slice(startIndex, endIndex);
console.log(subArray);
