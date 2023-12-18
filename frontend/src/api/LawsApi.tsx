import Axios from "axios";
import Cookies from "js-cookie";
import { baseUrl } from "./API";

class ClassLawsApi {
  baseUrl = `${baseUrl}/laws`;

  get() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getSingleLaw(law_id: string) {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_law/${law_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  updateSingleLaw(status: string, law_id: number) {
    const token = Cookies.get("token");
    return Axios.patch(
      `${this.baseUrl}/patch_law/${law_id}`,
      {
        status,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  setSingleLaw(name: string, description: string, text: string) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/set_single_law`,
      {
        name,
        description,
        text,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
}

const LawsApi = new ClassLawsApi();

export default LawsApi;
