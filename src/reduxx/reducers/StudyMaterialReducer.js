import {
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
} from "../action/actionTypes";

const initialState = {
  getstudymaterial: [],
};

const StudyMaterialReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_VIDEO_SUCCESS:
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

export default StudyMaterialReducer;
