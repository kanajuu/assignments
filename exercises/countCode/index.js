// Write a function that accepts a string and returns the number of times the word "code" is repeated.

let countCode = function(str) {
  let regex = /code/gi;
  let result = str.match(regex);
  alert(`Great! Your string has ${result.length} matches.`);
  return result.length;
};
