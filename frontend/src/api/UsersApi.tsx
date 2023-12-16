import Axios from "axios";
import Cookies from "js-cookie";

class ClassUsersApi {
  baseUrl = "http://localhost:3002/users";
  get() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  login({ email, password }: { email: string; password: string }) {
    return Axios.post(`${this.baseUrl}/auth`, {
      email,
      password,
    });
  }
}

const UsersApi = new ClassUsersApi();

export default UsersApi;
