// This file is an action creator
// 1. action creators return actions
// 2. action is an object that has at LEAST a property of type
// 3. this action creator is going to be handed to the dispatch

export default(operation, index)=>{
  console.log(operation, index)
  return{
    type:"updateFrozen",
    payload: {
      operation,
      index
    }
  }
}