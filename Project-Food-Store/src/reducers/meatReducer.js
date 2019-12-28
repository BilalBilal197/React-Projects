// All reducers have 2 params:
// 1. current state, usually provide a default state
// 2. info that came from any action

const seedData = [
  {
    food: 'chicken breast',
    quantity: 14
  },
  {
    food: 'bacon',
    quantity: 11
  },
  {
    food: 'mahi mahi',
    quantity: 35
  },
  {
    food: 'salmon',
    quantity: 135
  },
  
]

export default (state = seedData, action)=>{
  console.log("Meat Reducer is running")
  console.log("action")
  if(action.type === 'updateMeat'){
    //make a copy of the current state rather than directly fidling with the state
    const newState = [...state];
    const payload = action.payload;
    newState[payload.index].quantity += payload.qChange;
    return newState;
    // if(payload.operation === '+'){
    //   newState[payload.index].quantity++;
    // }else if(payload.operation === '-'){
    //   newState[payload.index].quantity--;
    // }
  } else if (action.type === 'clearInventory') {
    let newState = [...state];
    newState.forEach((item, i) => {
      item.quantity = 0;
    })
    return newState;
  } else {
    return state;
  }
}

// // below is ES5 syntax the same function
// function fronzen(state=[], action){
//   return state;
// }
// export default fronzen;