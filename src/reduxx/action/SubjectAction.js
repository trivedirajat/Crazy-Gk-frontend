import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import Axios from "../../utils/Axios";
import {
  GET_SUBJECTS_FAILURE,
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_TOPICS_FAILURE,
  GET_SUBJECTS_TOPICS_SUCCESS,
  START_LOADING,
  STOP_LOADING,
} from "./actionTypes";

export const fetchSubject = (subject) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    await Axios.get(`${BaseURL}${apiEndPoints.GETSUBJECTS_API}`, {
      params: subject,
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: GET_SUBJECTS_SUCCESS,
            payload: response?.data,
          });
        } else {
          dispatch({
            type: GET_SUBJECTS_FAILURE,
            payload: response,
          });
        }
      })
      .catch((error) => {
        console.log("error in login", error);
        dispatch({
          type: GET_SUBJECTS_FAILURE,
          payload: error,
        });
      });
  } catch (error) {
    console.log("error in login", error);

    dispatch({
      type: GET_SUBJECTS_FAILURE,
      payload: error,
    });
  } finally {
    dispatch({ type: STOP_LOADING });
  }
};
export const fetchSubjectTopics = (subject) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    await Axios.get(`${BaseURL}${apiEndPoints.GETSUBJECTNAME}`, {
      params: subject,
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: GET_SUBJECTS_TOPICS_SUCCESS,
            payload: response?.data,
          });
        } else {
          dispatch({
            type: GET_SUBJECTS_TOPICS_FAILURE,
            payload: response,
          });
        }
      })
      .catch((error) => {
        console.log("error in fetchSubjectTopics", error);
        dispatch({
          type: GET_SUBJECTS_TOPICS_FAILURE,
          payload: error,
        });
      });
  } catch (error) {
    console.log("error in fetchSubjectTopics", error);

    dispatch({
      type: GET_SUBJECTS_TOPICS_FAILURE,
      payload: error,
    });
  } finally {
    dispatch({ type: STOP_LOADING });
  }
};
