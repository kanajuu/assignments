// #1

let printEachLetter = function (inputStr) {
  for (let i = 0; i <= inputStr.length; i++) {
    console.log(inputStr.charAt(i));
  };
}

// #2

let findYourLetter = function (str, letter) {
  let isLetter = false;
  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) === letter) {
      console.log('We found your letter at position: ', i, ' in the string provided.');
      isLetter = true;
      return;
    }
  }
  if (!isLetter) {
    console.log('Unable to find the specified character.')
  }
};

// #3

let findArr = function (arr) {
  let complete = false;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 42) {
      console.log('We\'ve reached 42!');
      complete = true;
      return;
    }
  }
  if (!complete) {
    console.log('We didn\'t make it to 42! Shit!');
  }
};