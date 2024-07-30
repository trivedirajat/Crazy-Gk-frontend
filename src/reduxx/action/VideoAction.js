import axios from "axios";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import { GET_VIDEO_FAILURE, GET_VIDEO_SUCCESS } from "./actionTypes";

export const fetchVideos = (videoData) => async (dispatch) => {
    try {
        await axios
            .post(`${BaseURL}${apiEndPoints.GETVIDEO_API}`, videoData)
            .then((response) => {
                if (response.status === 200) {
                    console.log("responseeeee", response?.data?.data);
                    dispatch({
                        type: GET_VIDEO_SUCCESS,
                        payload: response?.data?.data,
                    });
                } else {
                    dispatch({
                        type: GET_VIDEO_FAILURE,
                        payload: response,
                    });
                }
            })
            .catch((error) => {
                console.log("error in fetchVideos", error);
                dispatch({
                    type: GET_VIDEO_FAILURE,
                    payload: error,
                });
            });
    } catch (error) {
        console.log("error in fetchVideos", error);

        dispatch({
            type: GET_VIDEO_FAILURE,
            payload: error,
        });
    }
};