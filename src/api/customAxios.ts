import axios, { AxiosError } from "axios";
import Cookies from "universal-cookie";

export const instance = axios.create({
  baseURL: "http://192.168.10.148:8080",
  timeout: 10000,
  headers: {
    "X-Auth-Token":
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlM2E2M2I2OS03MmFhLTQ0NGItOGRlOS0zOTVhNTgwMmQ2MDgiLCJpYXQiOjE3MDgyMTQ1NzAsImV4cCI6MTcwODIyNDU3MH0.SPtQ2AwvMoVBAhNgfnSDvWyFDLlsWQNe3OotpoUjaSsup4SOUHnt3-KXg27h9dLtG62DC864tnNf0z7ozqo3Rg",
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
