// Write a function that takes an array and an integer and returns the indices of the first two numbers that add up to the target.

let returnSumIndices = function(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === target) {
        return [i, k];
      }
    }
  }
};

const store = {
  state: undefined,
  getState: function(reducer) {
    return reducer(this.state, { type: "GET_STATE" });
  },
  dispatch: function(action, reducer) {
    this.state = reducer(this.state, action);
  }
};

const initialState = { counter: 0 };

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: prevState.counter + action.incrementBy
      };
    case "RESET":
      return {
        counter: prevState.counter = 0
      };
    default:
      return prevState;
  }
};

console.log(store.getState(reducer));

//ACTION CREATOR
const increment = incrementBy => {
  //THE OBJECT IS THE ACTION
  return { type: "INCREMENT", incrementBy };
};

store.dispatch(increment(-939375634510), reducer);

console.log(store.getState(reducer));

store.dispatch({type: "RESET"}, reducer)

console.log(store.getState(reducer));