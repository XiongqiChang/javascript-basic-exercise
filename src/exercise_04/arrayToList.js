export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array == null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length == 0) {
    throw new Error('Creating list from empty array');
  }
  let node;
  const head = {
    value: array[0],
    next: null,
  };
  let temp = head;
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < array.length; i++) {
    node = {
      value: array[i],
      next: null,
    };
    temp.next = node;
    temp = node;
  }
  return head;

  // throw new Error('Please delete this line and implement the function');
}