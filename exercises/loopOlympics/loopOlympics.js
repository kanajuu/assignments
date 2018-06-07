//prelim

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

for (let i = 9; i >= 0; i--) {
  console.log(i);
}

let fruit = ["banana", "apple", "bread", "orange", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// bronze
let fridge = [];
for (let i = 0; i <= 9; i++) {
  fridge.push(i);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

let fruity2 = ["banana", "apple", "bread", "orange", "cherry"];
let arr3 = [];
for (let i = 0; i < fruity.length; i++) {
  if (i % 2) {
    arr3.push(fruity[i]);
  }
}
console.log(arr3);

// silver

let people = ["john", "jack", "jill", "jacob", "jimmy"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

let peoples = [
  {
    name: "jack",
    occupation: "doctor"
  },
  {
    name: "jill",
    occupation: "con artist"
  },
  {
    name: "jacob",
    occupation: "maester"
  }
];

let peopleArr = [];
for (let i = 0; i < peoples.length; i++) {
  peopleArr.push(Object.keys(peoples[i]));
  console.log(peopleArr);
}
