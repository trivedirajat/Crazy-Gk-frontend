import axios from "axios";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import { GET_SUBJECTS_FAILURE, GET_SUBJECTS_SUCCESS, GET_SUBJECTS_TOPICS_FAILURE, GET_SUBJECTS_TOPICS_SUCCESS, START_LOADING, STOP_LOADING } from "./actionTypes";

export const fetchSubject = (subject) => async (dispatch) => {
    dispatch({ type: START_LOADING });
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.GETSUBJECTS_API}`, subject)
            .then((response) => {
                if (response.status === 200) {
                    console.log("responseeeee", response?.data?.data);

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
            })

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
        await axios
            .post(`${BaseURL}${apiEndPoints.GETSUBJECCTTOPICS}`, subject)
            .then((response) => {
                if (response.status === 200) {
                    console.log("res fetchSubjectTopics", response?.data?.data);
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