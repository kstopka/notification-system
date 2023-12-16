import Axios from "axios";
import Cookies from "js-cookie";

class ClassVotesApi {
  baseUrl = "http://localhost:3002/votes";

  additionalVotes(user_id: number, post_id: number, vote_value: boolean) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/additional_votes`,
      {
        user_id,
        post_id,
        vote_value,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
}

const VotesApi = new ClassVotesApi();

export default VotesApi;
