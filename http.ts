import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: "http://tradeplaorg-001-site14.gtempurl.com/",
  headers: {
    "Content-type": "application/json",
  },
});
