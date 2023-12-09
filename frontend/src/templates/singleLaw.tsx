import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getParamFromURL } from "../utils";
import Api from "../api/API";
import { AxiosResponse } from "axios";
import { SingleTicketData, TicketCommentData } from "../types/standard";
import SingleTicketContent from "../components/SingleTicketContent";
import SingleLawContent from "../components/SingleLawContent";

interface SingleTicketProps {}

const SingleLawPage: React.FC<SingleTicketProps> = () => {
  // const [ticket, setTicket] = useState<SingleTicketData>();
  // const [comments, setComments] = useState<TicketCommentData[]>([]);
  const [law, setLaw] = useState();

  const law_id = getParamFromURL("id");
  const getSingleLaw = async () => {
    try {
      if (law_id === null) return;
      const laws: AxiosResponse<any, any> = await Api.getSingleLaw(law_id);
      setLaw(laws.data[0]);
    } catch (error) {}
  };

  useEffect(() => {
    getSingleLaw();
  }, []);

  if (!law) return null;

  return (
    <Layout>
      <SingleLawContent law={law} />
    </Layout>
  );
};

export default SingleLawPage;
