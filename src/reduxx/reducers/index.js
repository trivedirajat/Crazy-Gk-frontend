// index.js file under reducers folder
import { combineReducers } from "redux";
import authReducer from "./autoReducer";
import SubjectReducer from "./subjectReducer";
import VideoReducer from "./VideoReducer";
import planReducer from "./addPlanReducer";
import StudyMaterialReducer from "./StudyMaterialReducer";
import AuthReducer, { loadingReducer } from "./AuthReducer";
import BlogReducer from "./BlogReducer";

const rootReducer = combineReducers({
  loadingReducer: loadingReducer,
  auth: AuthReducer,
  plan:planReducer,
  subject: SubjectReducer,
  studymaterial: StudyMaterialReducer,
  video: VideoReducer,
  blog: BlogReducer
});

export default rootReducer;
