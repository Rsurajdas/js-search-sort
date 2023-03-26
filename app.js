"use strict";
// const resultEl = document.querySelector(".result");
// todo Binary Search
/** 1) For binary search array must be sorted
 * 02) FInd x element in the given array
 * 03) Compare the x with the middle element in the array, if x matches with middle element, return middle index
 * 04) If x is greater then middle element, then x can only lie in right side
 * 05) If x is smaller then middle element, then x must lie in the left side
 */
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function binarySearch(arr, x, low, high) {
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
// let result = binarySearch(arr, 0, 0, arr.length);
// if (result !== -1) {
//   console.log(`Element is present at index ${result}`);
// } else {
//   console.log(`Element not found`);
// }

// todo Selection sort
/** 1) Set the first element as minimum
 * 02) Compare the minimum with the second element, if second element is smaller then minimum, assign second element as minimum
 * 03) The process goes on until the last element
 * 04) After each iteration, minimum is placed in the front of the unsorted list
 */
let arr1 = [40, 75, 32, 7, 14, 59, 26, 0, 11];
function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

// todo Bubble sort
/** 1) Compare first two element in the array, if first element is greater then second element, swap it place */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// todo Find largest element in the array
function findLargest(arr) {
  let max = arr[0];
  for (let el of arr) {
    if (el > max) {
      max = el;
    }
  }
  return max;
}

// todo Find smallest element in the array
function findSmallest(arr) {
  let min = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// todo Largest numbers in arrays --> Return Largest numbers of all the array in single array
function largestOfAll(arr) {
  //! ES6 version
  let result = [];
  for (let i of arr) {
    let max = i[0];
    for (let j of i) {
      if (j > max) {
        max = j;
      }
    }
    result.push(max);
  }
  return result;
}
function largestOfAll_old(arr) {
  //! ES5 version
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    result.push(max);
  }
  return result;
}

// todo Convert Celsius to Fahrenheit
function convertC2F(celsius) {
  return celsius * (9 / 5) + 32;
}
// console.log(convertC2F(100));

//todo interpolation Search
const sortedArr = [1, 4, 6, 7, 9, 12, 15, 16, 17, 23, 25, 26, 27, 31];
const target = 25;
const interpolationSearch = (arr = [], target) => {
  let lowerIndex = 0;
  let higherIndex = arr.length - 1;

  while (lowerIndex <= higherIndex) {
    let rangeDelta = arr[higherIndex] - arr[lowerIndex];
    let indexDelta = higherIndex - lowerIndex;
    let valueDelta = target - arr[lowerIndex];

    if (valueDelta < 0) {
      return -1;
    }

    if (!rangeDelta) {
      return arr[lowerIndex] === target ? lowerIndex : -1;
    }

    let position =
      lowerIndex + Math.floor((valueDelta * indexDelta) / rangeDelta);

    if (arr[position] === target) {
      return position;
    }

    if (arr[position] < target) {
      lowerIndex = position + 1;
    }

    if (arr[position] > target) {
      higherIndex = position - 1;
    }
  }
  return -1;
};
console.log(interpolationSearch(sortedArr, 31));

// ------------
const user = `id,firstName,lastName,email,gender
1,suraj,kumar,suraj@email.com,male
2,sasi,dharan,sasi@email.com,male
3,nirmal,kumar,nirmal@email.com,male`;

const csvToArr = function (data) {
  let output = [];
  // for (const row of data.split('\n')) {
  //   output.push(row.split(','))
  // }
  data.split("\n").forEach((el) => output.push(el.split(",")));
  return output;
};

console.log(csvToArr(user));
const covertToObj = function (arr) {
  let output = [];
  arr.forEach((el, idx) => {
    if (idx !== 0) {
      let obj = {};
      el.forEach((el, idx) => {
        obj[arr[0][idx]] = el;
      });
      output.push(obj);
    }
  });
  return output;
};

console.log(covertToObj(csvToArr(user)));
