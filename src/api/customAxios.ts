import axios, { AxiosError } from "axios";
import Cookies from "universal-cookie";

export const instance = axios.create({
  baseURL: "http://192.168.10.148:8080",
  timeout: 10000,
  headers: {
    "X-Auth-Token":
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzA4MjE3MDQ0LCJleHAiOjE3MDgyMjcwNDR9.sgnPQv09gP_GJKH40NVhRWSigeBpItWb7MupYplb--Dclb1AJ4_6dRmW-z3lE6xx2eHqGakumdu8ecrivfszPQ",
  },
});

const cookies = new Cookies();

instance.interceptors.request.use(
  async function (config) {
    const accessToken = cookies.get("access_token");
    if (accessToken) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);
