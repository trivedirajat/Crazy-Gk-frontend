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
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
  VERFIY_OTP_SUCCESS,
  VERFIY_OTP_FAILURE
} from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  users: null,
  updateprofile: null,
  resendotp: null,
  forgotpassword: null,
  updatepassword: null,
  userlist: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      // toast.success("Login successful!");
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case USER_LOGIN_FAILURE:
      // toast.error("Login failed. Please try again.");
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload,
      };
// USER_LOGOUT_SUCCESS & USER_LOGOUT_FAILURE not proper
    case USER_LOGOUT_SUCCESS:
      // toast.info("Logged out successfully.");s
      return initialState;
  
    case USER_LOGOUT_FAILURE:
      // toast.info("Logged out successfully.");s
      return initialState;

    case REGISTER_ADD_USERS_SUCCESS:
      return {
        ...state,
        // isAuthenticated: true,
        users: action.payload,
      };

    case REGISTER_ADD_FAILURE:
      return {
        ...state,
        // isAuthenticated: false,
        users: action.payload,
      };

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
// check UPDATE_PROFILE_SUCCESS & UPDATE_PROFILE_FAILURE
      case UPDATE_PROFILE_SUCCESS:
        // toast.success("Login successful!");
        return {
          ...state,
          isAuthenticated: true,
          updateprofile: action.payload,
        };
  
      case UPDATE_PROFILE_FAILURE:
        // toast.error("Login failed. Please try again.");
        return {
          ...state,
          isAuthenticated: false,
          updateprofile: action.payload,
        };
  
      case RESENT_OTP_SUCCESS:
        // toast.success("Login successful!");
        return {
          ...state,
          isAuthenticated: true,
          resendotp: action.payload,
        };
  
      case RESENT_OTP_FAILURE:
        // toast.error("Login failed. Please try again.");
        return {
          ...state,
          isAuthenticated: false,
          resendotp: action.payload,
        };
  
      case VERFIY_OTP_SUCCESS:
        // toast.success("Login successful!");
        return {
          ...state,
          resendotp: action.paylsoad,
        };
  
      case VERFIY_OTP_FAILURE:
        // toast.error("Login failed. Please try again.");
        return {
          ...state,
          resendotp: action.payload,
        };
  
      case FORGOT_PASSWORD_SUCCESS:
        // toast.success("Login successful!");
        return {
          ...state,
          isAuthenticated: true,
          forgotpassword: action.payload,
        };
  
      case FORGOT_PASSWORD_FAILURE:
        // toast.error("Login failed. Please try again.");
        return {
          ...state,
          isAuthenticated: false,
          forgotpassword: action.payload,
        };
  
      case UPDATE_PASSWORD_SUCCESS:
          // toast.success("Login successful!");
          return {
            ...state,
            isAuthenticated: true,
            updatepassword: action.payload,
          };
    
      case UPDATE_PASSWORD_FAILURE:
          // toast.error("Login failed. Please try again.");
          return {
            ...state,
            isAuthenticated: false,
            updatepassword: action.payload,
          };
          
      case CHANGE_PASSWORD_SUCCESS:
            // toast.success("Login successful!");
            return {
              ...state,
              isAuthenticated: true,
              changepassword: action.payload,
            };
      
      case CHANGE_PASSWORD_FAILURE:
            // toast.error("Login failed. Please try again.");
            return {
              ...state,
              isAuthenticated: false,
              updatepassword: action.payload,
            };
      
      case USER_LIST_SUCCESS:
              // toast.success("Login successful!");
              return {
                ...state,
                isAuthenticated: true,
                userlist: action.payload,
              };
        
      case USER_LIST_FAILURE:
              // toast.error("Login failed. Please try again.");
              return {
                ...state,
                isAuthenticated: false,
                userlist: action.payload,
              };
        
  
    default:
      return state;
  }
};

export default authReducer;