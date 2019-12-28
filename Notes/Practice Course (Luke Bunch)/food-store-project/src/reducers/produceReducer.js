// All reducers have 2 params:
// 1. current state, usually provide a default state
// 2. info that came from any action

const seedData = [
  {
    food: 'lettuce',
    quantity: 14
  },
  {
    food: 'turnips',
    quantity: 11
  },
  {
    food: 'apples',
    quantity: 35
  },
  {
    food: 'cilantro',
    quantity: 135
  }
  
]

export default (state = seedData, action)=>{
  console.log("Produce Reducer is running")
  console.log("action")
  if(action.type === 'updateProduce'){
    const payload = action.payload;
    const newState = [...state];
    newState[payload.index].quantity += payload.qChange;
    return newState;
  }else{
    return state;
  }
}

// // below is ES5 syntax the same function
// function fronzen(state=[], action){
//   return state;
// }
// export default fronzen;