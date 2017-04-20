function bubbleSort(array) {
  // var counter
  /* your code here */
  // takes an array
    // if empty, return empty array
    //if size 1, return array parameter
      // enter loop/iteration
        // call swap
        // boolean variable to confirm swap has been called
          // if there have been no swaps, return sorted array
        // counter++;
  // return sorted array
  if (array.length === 0) {
    return [];
  } else if (array.length === 1) { // ex: array: [6]
    return array;
  }

  var sortedArray = [];
  var sorted = false;
  // array.forEach(function(element, index, array) {
  //   if (element > array[index+1]) {

  //   }
  // });
  // [4, 3, 2, 1]
  // i: 0 -> 4,3 => 3,4 ==> [3, 4, 2, 1]
  // i: 1 -> 4,2 => 2,4 ==> [3, 2, 4, 1]
  // i: 2 -> 4,1 => 1,4 ==> [3, 2, 1, 4]
  // i: 3 -> 

  // [1,2,3,4]
  while(!sorted) {
    for(var i = 0; i < array.length; i++) { // [4, 3, 2, 1] length = 4
      if (array[i] > array[i+1]) {
        array = swap(array, i);
        sorted = false;
      } else {
        sorted = true;
        // if reached end of array AND...
      }
    }
  }
  console.log('~~~~~~~ ', array);
  return array;
}

function swap(array, index) { // [3,2,1]
  var temp = array[index]; // 3
  array[index] = array[index+1];
  array[index+1] = temp;
  return array;
  // helper function, spyOn to get # of bubbleSort swaps
}
