import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.apiUrl,
    });
  }

  allNote() {
    return this.apiClient.get("/api/notes");
  }
  AddOneNote(body) {
    return this.apiClient.post("/api/notes", body)
  }
  AddDay(body) {
    return this.apiClient.post("/api/day", body)
  }
  FindDays() {
    return this.apiClient.get("/api/day")
  }
  SalasAll() {
    return this.apiClient.get("/api/salas")
  }
  SalaAdd(body) {
    return this.apiClient.post("/api/salas", body)
  }
  SalaUpdate(id, body) {
    return this.apiClient.put("/api/salas/" + id, body)
  }
}

const apiClient = new ApiClient();
export default apiClient;