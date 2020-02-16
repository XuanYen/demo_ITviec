import * as types from "../constants/ActionTypes";
export const status = () => {
  return {
    type: types.CHANGE_STATUS
  };
};
export const showjob = () => {
  return {
    type: types.SHOW_JOB
  };
};
export const addjob = job => {
  return {
    type: types.ADD_JOB,
    job
  };
};
export const jobdetail = id => {
  return {
    type: types.JOB_DETAIL,
    id
  };
};
export const filterfield = field => {
  return {};
};
