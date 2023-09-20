import Axios from "axios";
import Cookies from "js-cookie";

class ClassApi {
  baseUrl = "http://localhost:3002";
  getUsers() {
    console.log("get_users");
    const token = Cookies.get("token");
    // console.log("token", token);
    // return Axios.get(`${this.baseUrl}/get_users`);
    return Axios.get(`${this.baseUrl}/get_users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
