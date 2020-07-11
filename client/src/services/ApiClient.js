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
    return this.apiClient.put(`/api/salas/${id}`, body)
  }
  SalaSingle(id) {
    return this.apiClient.get(`/api/salas/${id}`)
  }



  OrdenesAll() {
    return this.apiClient.get("/api/orden")
  }
  AddOrden(body) {
    return this.apiClient.post("/api/orden", body)
  }
  OrdenUpdate(id, body) {
    return this.apiClient.put(`/api/orden/${id}`, body)
  }
  OrdenSingle(id) {
    return this.apiClient.get(`/api/orden/${id}`)
  }
}

const apiClient = new ApiClient();
export default apiClient;