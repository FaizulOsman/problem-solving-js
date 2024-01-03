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
