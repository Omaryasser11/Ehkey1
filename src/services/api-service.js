import axios from "axios";

export const domain = "https://www.ehkey.com";

const axiosInstance = axios.create({
  baseURL: domain + "/api",
});

class APIClient {
  endpoint;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  post = (data, _token = "", content_type = "") =>
    axiosInstance
      .post(this.endpoint, data, {
        headers: {
          Authorization: `Bearer ${_token}`,
          Content_type: content_type,
        },
      })
      .then((res) => res.data);
  get = (_token, content_type = "") =>
    axiosInstance
      .get(this.endpoint, {
        headers: {
          Authorization: `Bearer ${_token}`,
          Content_type: content_type,
        },
      })
      .then((res) => res.data);
}

export default APIClient;
