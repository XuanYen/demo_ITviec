var initialState = false;
var rootReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_STATUS") {
    state = !state;
    return state;
  }
  return state;
};
export default rootReducer;
