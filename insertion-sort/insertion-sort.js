/**
 * Sorts an array using the insertion sort algorithm.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 * @throws {Error} - If the input is not an array.
 */
function insertionSort(array) {
  if (!Array.isArray(array)) {
    throw new Error("array is not an array");
  }

  for (let i = 1; i <= array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      array[j] = key;
      j = j - 1;
    }
  }
  return array;
}

//unit test
import { deepStrictEqual } from "assert";
import { throws } from "node:assert";
import test from "node:test";

//test for non-array input
test("non-array input", function () {
  throws(() => insertionSort("string"), Error);
});

//test for empty array
test("empty array", function () {
  deepStrictEqual(insertionSort([]), []);
});

//test for array with one element
test("array with one element", function () {
  deepStrictEqual(insertionSort([1]), [1]);
});

//test for array with two elements
test("array with two elements", function () {
  deepStrictEqual(insertionSort([2, 1]), [1, 2]);
});

//test for array with multiple elements
test("array with multiple elements", function () {
  deepStrictEqual(insertionSort([2, 1, 3]), [1, 2, 3]);
});

//test for array with 1000 random elements
test("array with 1000 random elements", function () {
  const array = [];
  for (let i = 0; i < 1000; i++) {
    array.push(Math.floor(Math.random() * 1000));
  }
  const sortedArray = array.sort((a, b) => a - b);
  deepStrictEqual(insertionSort(array), sortedArray);
});
