export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  let count = 0;
  if (string == null) return 0;
  if (prediction == null) {
    return string.length;
  } 
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < string.length; i++) {
    if (prediction(string[i])) {
      // eslint-disable-next-line no-plusplus
      count++;
    }
  }
  return count;
  // throw new Error('Please delete this line and implement the function');
}