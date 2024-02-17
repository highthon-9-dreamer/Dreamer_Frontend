import axios, { AxiosError } from "axios";
import Cookies from "universal-cookie";

export const instance = axios.create({
  baseURL: "http://192.168.10.148:8080",
  timeout: 10000,
  headers: {
    "X-Auth-Token":
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5YjFhYjBiNS04NjNhLTRmM2QtOTJiMy03MmNhNmFkMWJhOWUiLCJpYXQiOjE3MDgxOTA5MjksImV4cCI6MTcwODE5MjcyOX0.es0wFVoX97YorJEDZMBXFqLTwGnRc-TVl30knCwEzqjf8aFVMTOKUJyIhjbso9_9R0XrA62rp_KSJddPxJd_Rg",
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
