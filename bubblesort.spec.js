describe('Bubble Sort', function(){
  //global variables

  beforeEach(function() {
    
  });

  // it("is just a function, so it can contain any code", function() {
  //   expect(foo).toEqual(1);
  // });

  // it("can have more than one expectation", function() {
  //   expect(foo).toEqual(1);
  //   expect(true).toEqual(true);
  // });

  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array of 1 item', function(){
    expect(bubbleSort([6])).toEqual([6]);
  });

  it('the size of the input array is the size of the output array', function(){
    var input = [4, 3, 2, 1];
    var output = bubbleSort(input);
    expect(input.length).toEqual(output.length);
  });

  //expects sorted array

  //spyOn swap test function
});

