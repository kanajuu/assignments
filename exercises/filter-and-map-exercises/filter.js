// Use the native .filter() method to solve these problems.

// Write a function that returns only even numbers in the array.

let nums = [5, 2, 7, 9, 15, 22, 36];

let getEvens = function (num) {
  return num % 2 === 0;
};

console.log(nums.filter(getEvens));

// Write a function that returns only numbers with a value greater than 5. 

let numbers = [5, 2, 7, 9, 15, 22, 36];

let getGreaterThanFives = function (number) {
  return number > 5;
}

console.log(numbers.filter(getGreaterThanFives));

// Write a funciton that, given an array of strings, returns a new array that only includes those that are 5 characters or fewer in length

let strings = ["dog", "wolf", "by", "family", "eaten", "camping"];

let getSmallStrings = function (str) {
  return str.length <= 5;
}

console.log(strings.filter(getSmallStrings));

// Given an array of people objects return a new array that has filtered out all those who don't belong to the club.

let peopleInTheClub = [{
    name: "Angelina Jolie",
    member: true
  },
  {
    name: "Eric Jones",
    member: false
  },
  {
    name: "Paris Hilton",
    member: true
  },
  {
    name: "Kayne West",
    member: false
  },
  {
    name: "Bob Ziroll",
    member: true
  }
];

let bouncer = function (person) {
  return person.member === true;
};

console.log(peopleInTheClub.filter(bouncer));

// Filter out all the people who are not old enough to see The Matrix (younger than 18)

let movieWatchers = [{
    name: "Angelina Jolie",
    age: 14
  },
  {
    name: "Eric Jones",
    age: 12
  },
  {
    name: "Paris Hilton",
    age: 21
  },
  {
    name: "Kayne West",
    age: 9
  },
  {
    name: "Bob Ziroll",
    age: 32
  }
];

let checkIf18 = function (person) {
  return person.age >= 18;
};

console.log(movieWatchers.filter(checkIf18));