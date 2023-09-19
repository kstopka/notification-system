import Axios from "axios";

class ClassApi {
  baseUrl = "http://localhost:3002";
  getUsers() {
    console.log("get_users");
    Axios.get(`${this.baseUrl}/get_users`);
  }

  login({ email, password }: { email: string; password: string }) {
    console.log("authStart");
    return Axios.post(`${this.baseUrl}/auth`, {
      email,
      password,
    });
  }
}

const Api = new ClassApi();

export default Api;
