export default (qChange, index) => {
  return {
    type: "updateMeat",
    payload: {
      qChange,
      index
    }
  }
}