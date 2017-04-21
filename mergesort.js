'use strict';

function split(wholeArray) {
  let midpoint = wholeArray.length / 2;
  let firstHalf = wholeArray.slice(0, midpoint);
  let secondHalf = wholeArray.slice(midpoint);
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  let mergedArr = [],
    firstIndex = 0,
    secondIndex = 0;
  while (firstIndex < firstHalf.length && secondIndex < secondHalf.length) {
    if (firstHalf[firstIndex] < secondHalf[secondIndex]) {
      mergedArr.push(firstHalf[firstIndex])
      firstIndex++;
    } else {
      mergedArr.push(secondHalf[secondIndex]);
      secondIndex++;
    }
  }
  for (; firstIndex < firstHalf.length; firstIndex++) mergedArr.push(firstHalf[firstIndex]);
  for (; secondIndex < secondHalf.length; secondIndex++) mergedArr.push(secondHalf[secondIndex]);
  return mergedArr;
}

function mergeSort(array) {
  if (array.length < 2) return array;
  let splits = split(array),
    first = splits[0],
    second = splits[1];
  return merge(mergeSort(first), mergeSort(second));
}
