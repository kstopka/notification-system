import Axios from "axios";
import Cookies from "js-cookie";

class ClassLawsApi {
  baseUrl = "http://localhost:3002/laws";

  get() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const LawsApi = new ClassLawsApi();

export default LawsApi;
