import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.apiUrl,
    });
  }

  login(body) {
    return this.apiClient.post("/auth/login", body);
  }

}

const apiClient = new ApiClient();
export default apiClient;