import Axios from "axios";
import Cookies from "js-cookie";

class ClassServiceRequestsApi {
  baseUrl = "http://localhost:3002/service_requests";

  additionalServiceRequest(
    user_id: number,
    provider_id: number,
    description: string
  ) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/additional_service_request`,
      {
        user_id,
        provider_id,
        description,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
}

const ServiceRequestsApi = new ClassServiceRequestsApi();

export default ServiceRequestsApi;
