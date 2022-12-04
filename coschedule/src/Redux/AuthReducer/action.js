import { Toast, useToast } from "@chakra-ui/react";
import axios from "axios";
import * as types from "./actionTypes";

const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post("https://co-schedule-backend-deployment.vercel.app/user/signup", payload)
    .then((r) => {
      console.log(r);
     return dispatch({ type: types.REGISTER_SUCCESS, payload: r });
    }).catch((e) => dispatch({ type: types.REGISTER_FAILURE, payload: e }));
};

export { register };