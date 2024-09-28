const apiEndPoints = {
  JWTTOKEN: "/token/tokenGenrate",
  // USER REGISTER AUTH
  REGISTRATION_API: "/auth/signup",
  GETPROFILE_API: "/auth/getuserbyid",
  UPDATEPROFILE_API: "/auth/updateProfile",
  LOGIN_API: "/auth/login",
  GOOGLE_AUTH_API: "/auth/googleauth",
  RESENTOTP_API: "/auth/resentOtp",
  VERFIYOTP_API: "/auth/otpVerify",
  CHECK_MOBILE: "/auth/checkMobile",
  FORGOTPASSWORD_API: "/auth/forgotPassword",
  UPDATEPASSWORD_API: "/auth/updatePassword",
  CHANGEPASSWORD_API: "/auth/changePassword",
  GETUSERLIST_API: "/auth/getUserList",
  // SUBJECT SECTION API
  GETSUBJECTS_API: "/subjects/getSubjects",
  GETSUBJECCTTOPICS: "/studyMaterial/getSubjectTopics",
  // PLANS SECTION API
  ADDPLAN_API: "/plans/addPlan",
  GETPLAN_API: "/plans/getPlan",
  // ADDVIDEO SECTION API
  ADDVIDEO_API: "/video/addVideo",
  GETVIDEO_API: "/video/getAllVideo",
  GETBLOG: "/blogs/getBlogs",
  GETBLOG_BY_ID: "/blogs/getBlogById",
  GETWHATSNEW: "/whatsNew/getWhatsNew",
  GETEBOOK: "/books/geteebooks",
  GET_DALYVOCAB: "/dalyVocab/getDalyVocab",
  GET_JOB: "/job/getJob",
  //stydymaterial
  GET_STYDYMATERIAL_BY_SUBJECT: "/studyMaterial/getstudyMaterialBySubjectId",
  GET_STYDYMATERIAL_BY_ID: "/studyMaterial/getStudyById",
  //editorial
  GET_EDITORIAL: "/blogs/geteditorial",
};

export default apiEndPoints;
