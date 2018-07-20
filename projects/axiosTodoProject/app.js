let app = {
  todoList: {},
  getTodos: function() {
    axios
      .get("https://api.vschool.io/johnsmith/todo/")
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log("there was an unexoected error, try again?");
      });
  },
  addTodo: function(todoItem) {
    let url = "https://api.vschool.io/johnsmith/todo/";
    axios
      .post(url, todoItem)
      .then(result => {
        console.log(result + "you succesfully posted your object");
      })
      .catch(err => {
        console.log("there was an unexoected error, try again?");
      });
  }
};

let view = {
  add: function() {}
};

let eventHandler = {
  // handles all event listeners
};
