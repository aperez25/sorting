
function generateArray(size, lower, upper) {
  var randomArray = [];
  while (size--) {
    var randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
}

describe('Bubble Sort', function(){


  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array of 1 item', function(){
    expect(bubbleSort([6])).toEqual([6]);
  });

  it('sorts an array of many elements', function(){
    var input = [4, 3, 2, 1, 8, 5];
    var output = [1, 2, 3, 4, 5, 8];
    expect(bubbleSort(input)).toEqual(output);
  });

  for (var i = 2; i < 103; i+=20) {
    it('sorts an array of ' + i  + ' random items', function(){
    var arr = generateArray(i, 0, 100);
    var sorted = arr.slice(0).sort(function(a, b){ return a - b; });
    expect(bubbleSort(arr)).toEqual(sorted);
  });
  }
  it('compares the expected number of times', function(){
    spyOn(window, 'inOrder').and.callThrough();
    bubbleSort([4, 10, 2, 7]);
    expect(inOrder.calls.count()).toEqual(9);
  });

    it('swaps the expected number of times', function(){
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([4, 10, 2, 7]);
    expect(swap.calls.count()).toEqual(3);
  });


});

