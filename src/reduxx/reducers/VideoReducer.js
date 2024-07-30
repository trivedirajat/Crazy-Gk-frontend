// tutorReducer file under reducer folder
import {
  ADD_VIDEO_SUCCESS,
  ADD_VIDEO_FAILURE,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
} from "../action/actionTypes";
  
  const initialState = {
    isAuthenticated: false,
    addvideo:null,
    getvideo:[],
  };
  
  const VideoReducer = (state = initialState, action) => {
    switch (action.type) {
      case  ADD_VIDEO_SUCCESS:
        return {
          ...state,
          addvideo: action.payload,
        };
  
      case ADD_VIDEO_FAILURE:
        return {
          ...state,
          addvideo: action.payload,
        };
  
      case  GET_VIDEO_SUCCESS:
        return {
          ...state,
          getvideo: action.payload,
        };
  
      case GET_VIDEO_FAILURE:
        return {
          ...state,
          getvideo: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default VideoReducer;
  