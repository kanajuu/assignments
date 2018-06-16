// #1

let nums = [2, 4, 8, 12, 18, 24];

let doubleNums = function (num) {
  return num * 2;
};

console.log(nums.map(doubleNums));

// #2

let makeStrings = function (num) {
  return num.toString();
};

console.log(nums.map(makeStrings));

// #3

let names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

let capitalize = function (name) {
  return name.toUpperCase();
}

console.log(names.map(capitalize));

// #4

let pplNames = [{
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
];

let extract = function (pplName) {
  return pplName.name;
};

console.log(pplNames.map(extract));

// # 5

let is18 = function (ppl) {
  if (ppl.age <= 18) {
    return `${ppl.name} is not old enough to watch the Matrix!`;
  } else {
    return `${ppl.name} is old enough to watch the Matrix :)`;
  }
};

console.log(pplNames.map(is18));

// #6 

let makeH1Tags = function (person) {
  return `<h1>${person.name}</h1> <h2>${person.age}</h2>`
};

console.log(pplNames.map(makeH1Tags));