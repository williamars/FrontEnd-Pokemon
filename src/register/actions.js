import {
    REGISTER_USER
  } from './types';
  
export function setUserData(payload) {
return async (dispatch) => {
    dispatch({
    type: REGISTER_USER,
    payload,
    });
};
}
  
  