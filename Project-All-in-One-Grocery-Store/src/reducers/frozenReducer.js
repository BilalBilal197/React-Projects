// All reducers have 2 params:
// 1. current state, usually provide a default state
// 2. info that came from any action

const seedData = [
  {
    food: 'TV dinners',
    quantity: 10
  },
  {
    food: 'Frozen Veggies',
    quantity: 21
  },
  {
    food: 'Frozen Pizzas',
    quantity: 25
  }
  
]

export default (state = seedData, action)=>{
  console.log("Frozen Reducer is running!");
  console.log(action)
  if(action.type === 'updateFrozen'){
    console.log("I care abaout this action")
    //make of copy of the state as newState because we never change state direcly but let react change it
    let newState = [...state];
    if(action.payload.operation === '+'){
      newState[action.payload.index].quantity++;
    }else if(action.payload.operation === '-'){
      newState[action.payload.index].quantity--;
    }
    return newState;
  }else if(action.type === 'clearInventory'){
    let newState = [...state];
    newState.forEach((item, i)=>{
      item.quantity = 0;
    })
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