import { GET_SUBJECTS_FAILURE, GET_SUBJECTS_SUCCESS } from "../action/actionTypes";


const initialState = {
    response: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUBJECTS_SUCCESS:
            return {
                ...state,
                response: action.payload,
            };
        case GET_SUBJECTS_FAILURE:
            return {
                ...state,
                response: action.payload,
            };

        default:
            return state;
    }
};

export default AuthReducer;