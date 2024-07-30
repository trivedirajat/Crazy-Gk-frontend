// tutorReducer file under reducer folder
import { ADD_PLAN_FAILURE, ADD_PLAN_SUCCESS, GET_PLAN_FAILURE, GET_PLAN_SUCCESS } from "../action/actionTypes";
  
  const initialState = {
    isAuthenticated: false,
    addplan:null,
    getplan:[],
  };
  
  const planReducer = (state = initialState, action) => {
    switch (action.type) {
      case  ADD_PLAN_SUCCESS:
        return {
          ...state,
          addplan: action.payload,
        };
  
      case ADD_PLAN_FAILURE:
        return {
          ...state,
          addplan: action.payload,
        };
  
      case  GET_PLAN_SUCCESS:
        return {
          ...state,
          getplan: action.payload,
        };
  
      case GET_PLAN_FAILURE:
        return {
          ...state,
          getplan: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default planReducer;
  