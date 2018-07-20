// Write  function that mimics the native Array.prototype.every() method.

let everyThing = function(arr, callback) {
  for (i in arr) {
    if (!callback(arr[i])) {
      console.log(callback);
      return false;
    }
  }
  return true;
};

everyThing([1, 2, "3"], num => {
  return typeof num === "number";
});

// returns false

// Write  function that mimics the native Array.prototype.some() method.

let someThings = function(arr, callback) {
  for (i in arr) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
};

someThings(["ben", "jacob", "bob"], name => {
  return name === "jacob";
});

// returns true.

someThings(["ben", "jacobo", "bob"], name => {
  return name === "jacob";
});

// returns false.
