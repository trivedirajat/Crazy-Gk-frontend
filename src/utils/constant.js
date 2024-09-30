import axios from "axios";
import { tokenconfig } from "./appconfig";

export async function apiCall(
  method,
  url,
  data,
  header = {
    "Content-Type": "application/json",
    "access-control-allow-origin": "*",
  }
) {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: header,
      // withCredentials: false,
    });
    if (response.status === 200) {
      return response;
    }
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        console.log(`${url}: `, error.response);
        return error.response;
      }
      console.log("Error data : ", error.response.data);
      console.log("Error status : ", error.response.status);
      console.log("Error headers : ", error.response.headers);
    } else if (error.request) {
      console.log("Error request : ", error.request);
    } else {
      console.log("Error message : ", error.message);
    }
    console.log("Error config", error.config);
    // console.log("errorresponse", error.response);
    console.log("Error", error);
    return false;
  }
}
export const getuser = () => {
  const user = localStorage.getItem(tokenconfig.user);
  if (user) {
    return JSON.parse(user);
  }
  return false;
};
export const convertToYouTubeEmbedURL = (url) => {
  try {
    if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes("youtube.com/watch")) {
      const videoId = new URL(url).searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    return url;
  } catch (error) {
    console.error("Invalid YouTube URL:", url);
    return url;
  }
};
