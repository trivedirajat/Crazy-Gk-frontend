// tutorReducer file under reducer folder
import {
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAILURE,
  GET_SUBJECTS_TOPICS_SUCCESS,
  GET_SUBJECTS_TOPICS_FAILURE,
} from "../action/actionTypes";

const initialState = {
  getsubject: [],
  subjectTopics: [],
  loading: false
};

const SubjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBJECTS_SUCCESS:
      return {
        ...state,
        getsubject: action.payload,
        loading: false
      };

    case GET_SUBJECTS_FAILURE:
      return {
        ...state,
        getsubject: action.payload,
        loading: false
      };
    case GET_SUBJECTS_TOPICS_SUCCESS:
      return {
        ...state,
        subjectTopics: action.payload,
        loading: false
      };

    case GET_SUBJECTS_TOPICS_FAILURE:
      return {
        ...state,
        subjectTopics: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default SubjectReducer;
