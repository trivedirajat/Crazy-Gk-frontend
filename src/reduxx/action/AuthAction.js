import axios from "axios";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import { USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS, REMOVE_LOGIN_RESPONSE, REGISTER_ADD_USERS_SUCCESS, REGISTER_ADD_FAILURE, VERFIY_OTP_SUCCESS, VERFIY_OTP_FAILURE, RESENT_OTP_SUCCESS, RESENT_OTP_FAILURE, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, CHECK_MOBILE_SUCCESS, CHECK_MOBILE_ERROR, START_LOADING, STOP_LOADING, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAILURE } from "./actionTypes";

export const userLogin = (user) => async (dispatch) => {
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.LOGIN_API}`, user)
            .then((response) => {
                console.log("response", response);
                if (response?.status === 200) {
                    dispatch({
                        type: USER_LOGIN_SUCCESS,
                        payload: response,
                    });
                } else {
                    dispatch({
                        type: USER_LOGIN_FAILURE,
                        payload: response,
                    });
                }
            })
            .catch((error) => {
                console.log("error in login", error)
                dispatch({
                    type: USER_LOGIN_FAILURE,
                    payload: error,
                });
            });
    } catch (error) {
        console.log("error in login", error);

        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error,
        });
    }
};
export const userForgotPassword = (user) => async (dispatch) => {
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.FORGOTPASSWORD_API}`, user)
            .then((response) => {
                console.log("response", response);
                if (response?.status === 200) {
                    dispatch({
                        type: FORGOT_PASSWORD_SUCCESS
                        ,
                        payload: response,
                    });
                } else {
                    dispatch({
                        type: FORGOT_PASSWORD_FAILURE,
                        payload: response,
                    });
                }
            })
            .catch((error) => {
                console.log("error in login", error)
                dispatch({
                    type: USER_LOGIN_FAILURE,
                    payload: error,
                });
            });
    } catch (error) {
        console.log("error in login", error);

        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error,
        });
    }
};
export const checkUserMobile = (mobile) => async (dispatch) => {
    dispatch({ type: START_LOADING });
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.CHECK_MOBILE}`, mobile)
            .then((response) => {
                console.log("response checkUserMobile", response);
                if (response?.status === 200) {
                    dispatch({
                        type: CHECK_MOBILE_SUCCESS
                        ,
                        payload: response,
                    });
                } else {
                    dispatch({
                        type: CHECK_MOBILE_ERROR,
                        payload: response,
                    });
                }
            })
            .catch((error) => {
                console.log("error in checkUserMobile", error)
                dispatch({
                    type: CHECK_MOBILE_ERROR,
                    payload: error,
                });
            });
    } catch (error) {
        console.log("error in checkUserMobile", error);

        dispatch({
            type: CHECK_MOBILE_ERROR,
            payload: error,
        });
    } finally {
        dispatch({ type: STOP_LOADING });
    }
};

export const userRegister = (user_name) => async (dispatch) => {
    dispatch({ type: START_LOADING });
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.REGISTRATION_API}`, user_name)
            .then((response) => {
                console.log("REGISTER_ADD_USERS_SUCCESS", response);
                dispatch({
                    type: REGISTER_ADD_USERS_SUCCESS,
                    payload: response,
                });
            })
            .catch((error) => {
                console.log("error in Register", error);
                dispatch({
                    type: REGISTER_ADD_FAILURE,
                    payload: error,
                });
            });
    } catch (error) {
        console.log("error in Register", error);

        dispatch({
            type: REGISTER_ADD_FAILURE,
            payload: error,
        });
    } finally {
        dispatch({ type: STOP_LOADING });
    }
};
export const updateProfile = (params) => async (dispatch) => {
    const userToken = await localStorage.getItem('token')
    dispatch({ type: START_LOADING });
    try {
        await axios.post(
            `${BaseURL}${apiEndPoints.UPDATEPROFILE_API}`,
            params,
            {
                headers: {
                    'token': userToken,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )
            .then((response) => {
                console.log('response in update', response);
                if (response?.status === 200) {
                    dispatch({
                        type: UPDATE_PROFILE_SUCCESS,
                        payload: response,
                    });
                } else {
                    dispatch({
                        type: UPDATE_PROFILE_FAILURE,
                        payload: response,
                    });
                };
            })
            .catch((error) => {
                console.log("error in Register", error);
                dispatch({
                    type: UPDATE_PROFILE_FAILURE,
                    payload: error,
                });
            });
    } catch (error) {
        console.log("error in Register", error);

        dispatch({
            type: UPDATE_PROFILE_FAILURE,
            payload: error,
        });
    } finally {
        dispatch({ type: STOP_LOADING });
    }
};

// RESENTOTP_API SECTION END
export const userVerfiyOTP = (data) => async (dispatch) => {
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.VERFIYOTP_API}`, data)
            .then((response) => {
                console.log("response", response);
                if (response?.status === 200) {
                    dispatch({
                        type: VERFIY_OTP_SUCCESS,
                        payload: response,
                    });
                } else {
                    dispatch({
                        type: VERFIY_OTP_FAILURE,
                        payload: response,
                    });
                }

            })
            .catch((error) => {
                console.log("error in userVerfiyOTP", error);
                dispatch({
                    type: VERFIY_OTP_FAILURE,
                    payload: error,
                });
            });
    } catch (error) {
        console.log("error in userVerfiyOTP", error);

        dispatch({
            type: VERFIY_OTP_FAILURE,
            payload: error,
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
                    payload: response,
                });
            })
            .catch((error) => {
                console.log("error in userReSendOTP", error);
                dispatch({
                    type: RESENT_OTP_FAILURE,
                    payload: error,
                });
            });
    } catch (error) {
        console.log("error in Register", error);

        dispatch({
            type: RESENT_OTP_FAILURE,
            payload: error,
        });
    }
};
export const resetPassword = (password) => async (dispatch) => {
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.UPDATEPASSWORD_API}`, password)
            .then((response) => {
                console.log("response resetPassword", response);
                dispatch({
                    type: UPDATE_PASSWORD_SUCCESS,
                    payload: response,
                });
            })
            .catch((error) => {
                console.log("error in resetPassword", error);
                dispatch({
                    type: UPDATE_PASSWORD_FAILURE,
                    payload: error,
                });
            });
    } catch (error) {
        console.log("error in resetPassword", error);

        dispatch({
            type: UPDATE_PASSWORD_FAILURE,
            payload: error,
        });
    }
};
export const removeAuthResponse = () => async (dispatch) => {
    return dispatch({
        type: REMOVE_LOGIN_RESPONSE,
        payload: null
    })
}