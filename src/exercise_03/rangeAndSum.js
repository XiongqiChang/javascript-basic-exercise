export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var array = new Array();
  if (start == end)
    return array;
  if (start < end) {
    for (var i = start; i < end; i++) {
      array.push(i);
    }
  } else {
    var length = start - end;
    for (var i = 0; i < length; i++) {
      array.push(start--);
    }
  }
  return array;

  //throw new Error('Please delete this line and implement the function');
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  // eslint-disable-next-line no-shadow
  let sum = 0;
  // eslint-disable-next-line eqeqeq
  if (numbers.length == 0) {
    return 0;
  }
  for (let i = numbers.length - 1; i >= 0; i--) {
    sum += numbers[i];
  }
  return sum;
  // throw new Error('Please delete this line and implement the function');
}