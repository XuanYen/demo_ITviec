import * as types from "../constants/ActionTypes";
var acc = [];
var rootReducer = (state = acc, action) => {
  switch (action.type) {
    case types.POST_ACC:
      var id = state.length.toString();
      var newacc = {
        id: id,
        name: action.acc.name,
        email: action.acc.email,
        password: action.acc.password,
        account: action.acc.account,
        pass: action.acc.pass
      };
      state.push(newacc);
      return state;
    default:
      return state;
  }
};
export default rootReducer;
