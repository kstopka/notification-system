import Axios from "axios";
import Cookies from "js-cookie";

class ClassServiceProvidersApi {
  baseUrl = "http://localhost:3002/service_providers";
  get() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const ServiceProvidersApi = new ClassServiceProvidersApi();

export default ServiceProvidersApi;
