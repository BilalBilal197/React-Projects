

export default()=>{
  return(dispatch, getState)=>{
    setTimeout(()=>{
      console.log("I waiterd for 2 seconds")
      const reduxState = getState();
      console.log(reduxState);
      dispatch({
        type: "testThunk"
      })
    }, 2000)
  }
}