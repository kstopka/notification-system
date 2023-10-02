import Axios from "axios";
import Cookies from "js-cookie";

class ClassApi {
  baseUrl = "http://localhost:3002";
  getUsers() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  login({ email, password }: { email: string; password: string }) {
    return Axios.post(`${this.baseUrl}/auth`, {
      email,
      password,
    });
  }

  getNews() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_news`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const Api = new ClassApi();

export default Api;
