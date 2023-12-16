import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getParamFromURL } from "../utils";
import Api from "../api/API";
import { AxiosResponse } from "axios";
import { SingleTicketData, TicketCommentData } from "../types/standard";
import SingleTicketContent from "../components/SingleTicketContent";
import SingleLawContent from "../components/SingleLawContent";
import LawsApi from "../api/LawsApi";

interface SingleTicketProps {}

const SingleLawPage: React.FC<SingleTicketProps> = () => {
  const [law, setLaw] = useState();

  const law_id = getParamFromURL("id");
  const getSingleLaw = async () => {
    try {
      if (law_id === null) return;
      const laws: AxiosResponse<any, any> = await LawsApi.getSingleLaw(law_id);
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
