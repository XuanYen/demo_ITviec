import status from "./status";
import jobs from "./jobs";
import acc from "./acc";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  status: status,
  jobs: jobs,
  acc: acc
});
export default rootReducer;
