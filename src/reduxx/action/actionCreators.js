// action creator file
import axios from "axios";
import {
SET_AUTH_TOKEN,
REMOVE_AUTH_TOKEN,
REGISTER_ADD_USERS_SUCCESS,
REGISTER_ADD_FAILURE,
USER_LOGOUT_SUCCESS,
USER_LOGOUT_FAILURE,
UPDATE_PROFILE_SUCCESS,
UPDATE_PROFILE_FAILURE,
RESENT_OTP_SUCCESS,
RESENT_OTP_FAILURE,
FORGOT_PASSWORD_SUCCESS,
FORGOT_PASSWORD_FAILURE,
UPDATE_PASSWORD_SUCCESS,
UPDATE_PASSWORD_FAILURE,
CHANGE_PASSWORD_SUCCESS,
CHANGE_PASSWORD_FAILURE,
USER_LIST_SUCCESS,
USER_LIST_FAILURE,
GET_SUBJECTS_SUCCESS,
GET_SUBJECTS_FAILURE,
ADD_PLAN_SUCCESS,
ADD_PLAN_FAILURE,
GET_PLAN_SUCCESS,
GET_PLAN_FAILURE,
ADD_VIDEO_SUCCESS,
ADD_VIDEO_FAILURE,
GET_VIDEO_SUCCESS,
GET_VIDEO_FAILURE,
VERFIY_OTP_FAILURE,
VERFIY_OTP_SUCCESS,

} from "./actionTypes";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";

// TOKEN SECTION START
export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});
export const removeAuthToken = () => ({
  type: REMOVE_AUTH_TOKEN,
});
// TOKEN SECTION END

// Register SECTION START
export const userRegister = (user_name) => async (dispatch) => {
  try {
    await axios
      .post(`${BaseURL}${apiEndPoints.REGISTRATION_API}`, user_name)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: REGISTER_ADD_USERS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in Register", error.response.data);
        dispatch({
          type: REGISTER_ADD_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in Register", error.response.data);

    dispatch({
      type: REGISTER_ADD_FAILURE,
      payload: error.response.data,
    });
  }
};
// RESENTOTP_API SECTION END
export const userVerfiyOTP= () => async (dispatch) => {
  try {
    await axios
      .post(`${BaseURL}${apiEndPoints.VERFIYOTP_API}`, )
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: VERFIY_OTP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in Register", error.response.data);
        dispatch({
          type: VERFIY_OTP_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in Register", error.response.data);

    dispatch({
      type: VERFIY_OTP_FAILURE,
      payload: error.response.data,
    });
  }
};
export const userReSendOTP = (users) => async (dispatch) => {
  console.log("user11111", users);
  try {
    await axios
      .post(`${BaseURL}${apiEndPoints.RESENTOTP_API}`, users)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: RESENT_OTP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in Register", error.response.data);
        dispatch({
          type: RESENT_OTP_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in Register", error.response.data);

    dispatch({
      type: RESENT_OTP_FAILURE,
      payload: error.response.data,
    });
  }
};
// RESENTOTP_API SECTION END
// LOGIN LOGOUT SECTION START

export const userForgotPassword = (user) => async (dispatch) => {
  try {
    await axios
      .post(`${BaseURL}${apiEndPoints.FORGOTPASSWORD_API}`, user)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error.response.data);
        dispatch({
          type: FORGOT_PASSWORD_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in login", error.response.data);

    dispatch({
      type: FORGOT_PASSWORD_FAILURE,
      payload: error.response.data,
    });
  }
};
export const userUpdatePassword = (user) => async (dispatch) => {
  try {
    await axios
      .post(`${BaseURL}${apiEndPoints.UPDATEPASSWORD_API}`, user)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: UPDATE_PASSWORD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error.response.data);
        dispatch({
          type: UPDATE_PASSWORD_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in login", error.response.data);

    dispatch({
      type: UPDATE_PASSWORD_FAILURE,
      payload: error.response.data,
    });
  }
};
export const userChangePassword = (user) => async (dispatch) => {
  try {
    await axios
      .post(`${BaseURL}${apiEndPoints.CHANGEPASSWORD_API}`, user)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: CHANGE_PASSWORD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error.response.data);
        dispatch({
          type: CHANGE_PASSWORD_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in login", error.response.data);

    dispatch({
      type: CHANGE_PASSWORD_FAILURE,
      payload: error.response.data,
    });
  }
};
export const userUpdateProfile = (user) => async (dispatch) => {
  try {
    await axios
      .post(`${BaseURL}${apiEndPoints.UPDATEPROFILE_API}`, user)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: UPDATE_PROFILE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error.response.data);
        dispatch({
          type: UPDATE_PROFILE_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in login", error.response.data);

    dispatch({
      type: UPDATE_PROFILE_FAILURE,
      payload: error.response.data,
    });
  }
};
export const userGetList = (user) => async (dispatch) => {
  try {
    await axios
      .post(`${BaseURL}${apiEndPoints.GETUSERLIST_API}`, user)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: USER_LIST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error.response.data);
        dispatch({
          type: USER_LIST_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in login", error.response.data);

    dispatch({
      type: USER_LIST_FAILURE,
      payload: error.response.data,
    });
  }
};
export const logout = () => ({
  type: USER_LOGOUT_SUCCESS,
});
export const loginFailure = () => ({
  type: USER_LOGOUT_FAILURE,
});
export const fetchSubject = (subject) => async (dispatch) => {
  try {
    await axios
      .get(`${BaseURL}${apiEndPoints.GETSUBJECTS_API}`, subject)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: GET_SUBJECTS_SUCCESS,
          payload: response?.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data);
        dispatch({
          type: GET_SUBJECTS_FAILURE,
          payload: error?.response?.data,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data);

    dispatch({
      type: GET_SUBJECTS_FAILURE,
      payload: error.response.dat,
    });
  }
};
// GETSUBJECTS_API SECTION END 
// ADDPLAN_API,GETPLAN_API SECTION START
export const addPlan = () => async (dispatch) => {
  try {
    await axios
      .post(`${BaseURL}${apiEndPoints.ADDPLAN_API}`, )
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: ADD_PLAN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error.response.data);
        dispatch({
          type: ADD_PLAN_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in login", error.response.data);

    dispatch({
      type: ADD_PLAN_FAILURE,
      payload: error.response.data,
    });
  }
};
export const fetchPlan = (plan) => async (dispatch) => {
  console.log("user11111");
  try {
    await axios
      .get(`${BaseURL}${apiEndPoints.GETPLAN_API}`, plan)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: GET_PLAN_SUCCESS,
          payload: response?.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data);
        dispatch({
          type: GET_PLAN_FAILURE,
          payload: error?.response?.data,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data);

    dispatch({
      type: GET_PLAN_FAILURE,
      payload: error.response.dat,
    });
  }
};
// ADDPLAN_API,GETPLAN_API SECTION END
// ADDVIDEO_API,GETVIDEO_API SECTION START 
export const addVideo = () => async (dispatch) => {
  try {
    await axios
      .post(`${BaseURL}${apiEndPoints.ADDVIDEO_API}`, )
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: ADD_VIDEO_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error.response.data);
        dispatch({
          type: ADD_VIDEO_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in login", error.response.data);

    dispatch({
      type: ADD_VIDEO_FAILURE,
      payload: error.response.data,
    });
  }
};
export const fetchVideo = (plan) => async (dispatch) => {
  console.log("user11111");
  try {
    await axios
      .get(`${BaseURL}${apiEndPoints.GETVIDEO_API}`, plan)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: GET_VIDEO_SUCCESS,
          payload: response?.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data);
        dispatch({
          type: GET_VIDEO_FAILURE,
          payload: error?.response?.data,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data);

    dispatch({
      type: GET_VIDEO_FAILURE,
      payload: error.response.dat,
    });
  }
};
// ADDVIDEO_API,GETVIDEO_API SECTION END 


