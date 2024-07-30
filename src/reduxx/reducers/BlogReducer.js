import {
  GET_BLOG, GET_BLOG_FAILURE,
  GET_DAILYVOCAB,
  GET_DAILYVOCAB_FAILURE,
  GET_EBOOK,
  GET_EBOOK_FAILURE,
  GET_JOBS,
  GET_JOBS_FAILURE,
  GET_WHATSNEW,
  GET_WHATSNEW_FAILURE,
} from "../action/actionTypes";

const initialState = {
  getBlog: [],
  getWhatsNew: [],
  getEBook: [],
  getDaliyVocab: [],
  getJobs: []
};

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_BLOG:
      return {
        ...state,
        getBlog: action.payload,
      };

    case GET_BLOG_FAILURE:
      return {
        ...state,
        getBlog: action.payload,
      };
    case GET_WHATSNEW:
      return {
        ...state,
        getWhatsNew: action.payload,
      };

    case GET_WHATSNEW_FAILURE:
      return {
        ...state,
        getWhatsNew: action.payload,
      };
    case GET_EBOOK:
      return {
        ...state,
        getEBook: action.payload,
      };

    case GET_EBOOK_FAILURE:
      return {
        ...state,
        getEBook: action.payload,
      };
    case GET_DAILYVOCAB:
      return {
        ...state,
        getDaliyVocab: action.payload,
      };

    case GET_DAILYVOCAB_FAILURE:
      return {
        ...state,
        getDaliyVocab: action.payload,
      };
    case GET_JOBS:
      return {
        ...state,
        getJobs: action.payload,
      };

    case GET_JOBS_FAILURE:
      return {
        ...state,
        getJobs: action.payload,
      };

    default:
      return state;
  }
};

export default BlogReducer;
