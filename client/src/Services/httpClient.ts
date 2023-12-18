import axios from "axios";

let accessToken = localStorage.getItem("accessToken");

export default axios.create({
  baseURL: "http://localhost:5555/api",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
