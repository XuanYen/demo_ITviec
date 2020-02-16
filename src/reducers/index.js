import status from "./status";
import jobs from "./jobs";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  status: status,
  jobs: jobs
});
export default rootReducer;
