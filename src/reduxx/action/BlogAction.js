import axios from "axios";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import { GET_BLOG, GET_BLOG_FAILURE, GET_DAILYVOCAB, GET_DAILYVOCAB_FAILURE, GET_EBOOK, GET_EBOOK_FAILURE, GET_JOBS, GET_JOBS_FAILURE, GET_WHATSNEW, GET_WHATSNEW_FAILURE, START_LOADING, STOP_LOADING } from "./actionTypes";

export const fetchBlog = (params) => async (dispatch) => {
    dispatch({ type: START_LOADING });
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.GETBLOG}`, params)
            .then((response) => {
                if (response.status === 200) {
                    console.log("responseeeee fetchBlog", response?.data?.data);

                    dispatch({
                        type: GET_BLOG,
                        payload: response?.data,
                    });
                } else {
                    dispatch({
                        type: GET_BLOG_FAILURE,
                        payload: response,
                    });
                }
            })
            .catch((error) => {
                console.log("error in fetchBlog", error);
                dispatch({
                    type: GET_BLOG_FAILURE,
                    payload: error,
                });
            })

    } catch (error) {
        console.log("error in fetchBlog", error);

        dispatch({
            type: GET_BLOG_FAILURE,
            payload: error,
        });
    } finally {
        dispatch({ type: STOP_LOADING });
    }
};
export const fetchWhatsNew = (params) => async (dispatch) => {
    dispatch({ type: START_LOADING });
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.GETWHATSNEW}`, params)
            .then((response) => {
                if (response.status === 200) {
                    console.log("responseeeee fetchWhatsNew", response?.data?.data);

                    dispatch({
                        type: GET_WHATSNEW,
                        payload: response?.data,
                    });
                } else {
                    dispatch({
                        type: GET_WHATSNEW_FAILURE,
                        payload: response,
                    });
                }
            })
            .catch((error) => {
                console.log("error in fetchWhatsNew", error);
                dispatch({
                    type: GET_WHATSNEW_FAILURE,
                    payload: error,
                });
            })

    } catch (error) {
        console.log("error in fetchWhatsNew", error);

        dispatch({
            type: GET_WHATSNEW_FAILURE,
            payload: error,
        });
    } finally {
        dispatch({ type: STOP_LOADING });
    }
};
export const fetcEBooks = (params) => async (dispatch) => {
    dispatch({ type: START_LOADING });
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.GETEBOOK}`, params)
            .then((response) => {
                if (response.status === 200) {
                    console.log("responseeeee fetcEBooks", response?.data?.data);

                    dispatch({
                        type: GET_EBOOK,
                        payload: response?.data,
                    });
                } else {
                    dispatch({
                        type: GET_EBOOK_FAILURE,
                        payload: response,
                    });
                }
            })
            .catch((error) => {
                console.log("error in fetcEBooks", error);
                dispatch({
                    type: GET_EBOOK_FAILURE,
                    payload: error,
                });
            })

    } catch (error) {
        console.log("error in fetcEBooks", error);

        dispatch({
            type: GET_EBOOK_FAILURE,
            payload: error,
        });
    } finally {
        dispatch({ type: STOP_LOADING });
    }
};
export const fetchDaliyVocab = (params) => async (dispatch) => {
    dispatch({ type: START_LOADING });
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.GET_DALYVOCAB}`, params)
            .then((response) => {
                if (response.status === 200) {
                    console.log("responseeeee fetchDaliyVocab", response?.data?.data);

                    dispatch({
                        type: GET_DAILYVOCAB,
                        payload: response?.data,
                    });
                } else {
                    dispatch({
                        type: GET_DAILYVOCAB_FAILURE,
                        payload: response,
                    });
                }
            })
            .catch((error) => {
                console.log("error in fetchDaliyVocab", error);
                dispatch({
                    type: GET_DAILYVOCAB_FAILURE,
                    payload: error,
                });
            })

    } catch (error) {
        console.log("error in fetchDaliyVocab", error);

        dispatch({
            type: GET_DAILYVOCAB_FAILURE,
            payload: error,
        });
    } finally {
        dispatch({ type: STOP_LOADING });
    }
};
export const fetchJobs = (params) => async (dispatch) => {
    dispatch({ type: START_LOADING });
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.GET_JOB}`, params)
            .then((response) => {
                if (response.status === 200) {
                    console.log("responseeeee fetchJobs", response?.data?.data);

                    dispatch({
                        type: GET_JOBS,
                        payload: response?.data,
                    });
                } else {
                    dispatch({
                        type: GET_JOBS_FAILURE,
                        payload: response,
                    });
                }
            })
            .catch((error) => {
                console.log("error in fetchJobs", error);
                dispatch({
                    type: GET_JOBS_FAILURE,
                    payload: error,
                });
            })

    } catch (error) {
        console.log("error in fetchJobs", error);

        dispatch({
            type: GET_JOBS_FAILURE,
            payload: error,
        });
    } finally {
        dispatch({ type: STOP_LOADING });
    }
};