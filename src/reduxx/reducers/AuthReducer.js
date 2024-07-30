// autoReducer file
import {
    SET_AUTH_TOKEN,
    REMOVE_AUTH_TOKEN,
    REGISTER_ADD_USERS_SUCCESS,
    REGISTER_ADD_FAILURE,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
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
    VERFIY_OTP_SUCCESS,
    VERFIY_OTP_FAILURE,
    REMOVE_LOGIN_RESPONSE,
    START_LOADING,
    STOP_LOADING,
    CHECK_MOBILE_SUCCESS,
    CHECK_MOBILE_ERROR
} from "../action/actionTypes";

const initialState = {
    isAuthenticated: false,
    responseLogin: null,
    responseSignup: null,
    responseOtpVerify: null,
    responseCheckMobile: null,
    user: null,
    token: null,
    users: null,
    updateprofile: null,
    resendotp: null,
    forgotpassword: null,
    updatepassword: null,
    userlist: null,
    loading: false,
};

export function loadingReducer(state = { loading: false }, action) {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true,
            }
        case STOP_LOADING:
            return {
                ...state,
                loading: false,
            }
        default: return state
    }

}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                responseLogin: action.payload,
                isAuthenticated: true,
                userData: action.payload
            };

        case USER_LOGIN_FAILURE:
            return {
                ...state,
                responseLogin: action.payload,
            };
        case CHECK_MOBILE_SUCCESS:
            return {
                ...state,
                responseCheckMobile: action.payload,
            };
        case CHECK_MOBILE_ERROR:
            return {
                ...state,
                responseCheckMobile: action.payload,
            };
        case REGISTER_ADD_USERS_SUCCESS:
            return {
                ...state,
                responseSignup: action.payload,
            };

        case REGISTER_ADD_FAILURE:
            return {
                ...state,
                responseSignup: action.payload,
            };
        case REMOVE_LOGIN_RESPONSE:
            return {
                ...state,
                responseSignup: action.payload,
                responseLogin: action.payload,
                responseOtpVerify: action.payload,
                resendotp: action.payload,
                responseCheckMobile: action.payload,
                updateprofile: action.payload,
                forgotpassword: action.payload,
                updatepassword: action.payload,
            };
        case USER_LOGOUT_SUCCESS:
            // Clear local storage
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };

        case USER_LOGOUT_FAILURE:
            return initialState;


        case SET_AUTH_TOKEN:
            return {
                ...state,
                token: action.payload,
            };

        case REMOVE_AUTH_TOKEN:
            return {
                ...state,
                token: null,
            };
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                updateprofile: action.payload,
                isAuthenticated: true,
                userData: action.payload
            };

        case UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                updateprofile: action.payload,
            };

        case RESENT_OTP_SUCCESS:
            return {
                ...state,
                resendotp: action.payload,
            };

        case RESENT_OTP_FAILURE:
            return {
                ...state,
                resendotp: action.payload,
            };

        case VERFIY_OTP_SUCCESS:
            return {
                ...state,
                responseOtpVerify: action.payload,
            };

        case VERFIY_OTP_FAILURE:
            return {
                ...state,
                responseOtpVerify: action.payload,
            };

        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                forgotpassword: action.payload,
            };

        case FORGOT_PASSWORD_FAILURE:
            return {
                ...state,
                forgotpassword: action.payload,
            };

        case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                updatepassword: action.payload,
            };

        case UPDATE_PASSWORD_FAILURE:
            return {
                ...state,
                updatepassword: action.payload,
            };

        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                changepassword: action.payload,
            };

        case CHANGE_PASSWORD_FAILURE:
            return {
                ...state,
                updatepassword: action.payload,
            };



        default:
            return state;
    }
};

export default AuthReducer;