var lyrics = [
  "This",
  "hit",
  "that",
  "ice",
  "cold",
  "Michelle",
  "Pfeiffer",
  "that",
  "white",
  "gold",
  "This",
  "one",
  "for",
  "them",
  "hood",
  "girls",
  "Them",
  "good",
  "girls",
  "straight",
  "masterpieces",
  "Stylin'",
  "whilen'",
  "livin'",
  "it",
  "up",
  "in",
  "the",
  "city",
  "Got",
  "Chucks",
  "on",
  "with",
  "Saint",
  "Laurent",
  "Gotta",
  "kiss",
  "myself",
  "I'm",
  "so",
  "pretty"
];

let printToConsole = function(arr) {
  console.log(arr.join(" "));
};

let printBackwards = function(arr) {
  let reversedArray = arr.slice();
  reversedArray.reverse();
  console.log(reversedArray.join(" "));
};

let printEveryOther = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr.join(" ");
};

let reverseEveryOther = function(arr) {
  let copyArr = arr.slice();
  for (let i = 1; i < copyArr.length; i += 2) {
    copyArr.push(arr[i], arr[i - 1]);
  }
  return copyArr.join(" ");
};
