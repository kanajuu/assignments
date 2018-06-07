const person = {
  name: "Spongebob",
  age: 32,
  hasHair: false,
  address: {
    streetAddress: {
      lane: "Pineapple",
      streetNumber: 123
    },
    city: "Bikini Bottom",
    county: "Bikini County",
    state: "Hawaii",
    region: "Pacific Ocean"
  },
  work: {
    occupation: "Burger Maker",
    duties: [
      "Flipping Burgers",
      "Testing Burgers",
      "Protecting Formula Secret",
      "Greeting Customers"
    ],
    yearsWorked: 20,
    boss: "Mr. Krabs"
  },
  hobbies: [{
      name: "Jellyfish fishing",
      itemsUsed: [{
          itemName: "Net",
          use: "Catching jellyfish"
        },
        {
          itemName: "Bait",
          use: "For luring jellyfish closer"
        },
        {
          itemName: "Camera",
          use: "For taking pictures of Jellyfish"
        }
      ],
      levelOfHappiness: "9/10"
    },
    {
      name: "Hanging out with Patrick Star",
      itemsUsed: [{
        itemName: "junk",
        use: "for playing with"
      }],
      levelOfHappiness: "8/10"
    }
  ],
  friends: [{
      name: "Sandy",
      age: 29
    },
    {
      name: "Patrick Star",
      age: 13
    }
  ],
  addFriend: function (friendName, age) {
    this.friends.push({
      name: friendName,
      age: age
    })
    alert('Succesfully added ' +
      friendName + 'to your profile!');
  }
};