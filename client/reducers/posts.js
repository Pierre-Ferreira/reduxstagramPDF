// a reducer takes  in two things.
// 1. the action (info about what happened)
// 2. copy of current state.

function posts(state = [], action) {
  const i = action.index;
  switch(action.type){
    case 'INCREMENT_LIKES' :
      console.log('Incrementing likes');
// let returnArray = [
//   ...state.slice(0, i), // Part of array before one that is changing.
//   {...state[i], likes: state[i].likes + 1},
//   ...state.slice(i+1) // Part of array after one that is changing.
// ]
// console.log(state);
// console.log(returnArray);
// return returnArray;
      //ES6 WAY!
      return [
        ...state.slice(0, i), // Part of array before one that is changing.
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1) // Part of array after one that is changing.
      ]
      // ES5 Way below..
      // const befArray = state.slice(0, i);
      // const changedIndex = state[i];
      // changedIndex.likes = changedIndex.likes + 1;
      // const afterArr = state.slice(i + 1);
      // const newArray = befArray.concat(changedIndex, afterArr);
      // return newArray
// WHY DOES THIS NOT WORK WHEN IT ACTUALLY DOES INCREMENT THE LIKES???
//       let copyState = state;
// console.log(copyState);
// console.log(copyState[i]);
// console.log(copyState[i].likes);
//       copyState[i].likes = copyState[i].likes+1;
// console.log(copyState[i].likes);
// console.log(copyState[i]);
// console.log(copyState);
//       return copyState

    default:
      return state;
  }
}

export default posts;
