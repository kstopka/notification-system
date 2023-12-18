import Axios from "axios";
import Cookies from "js-cookie";
import { baseUrl } from "./API";

class ClassServiceProvidersApi {
  url = `${baseUrl}/service_providers`;
  get() {
    const token = Cookies.get("token");
    return Axios.get(`${this.url}/get`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const ServiceProvidersApi = new ClassServiceProvidersApi();

export default ServiceProvidersApi;
