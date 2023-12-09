import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getParamFromURL } from "../utils";
import Api from "../api/API";
import { AxiosResponse } from "axios";
import { SingleTicketData, TicketCommentData } from "../types/standard";
import SingleTicketContent from "../components/SingleTicketContent";

interface SingleTicketProps {}

const SingleLawPage: React.FC<SingleTicketProps> = () => {
  // const [ticket, setTicket] = useState<SingleTicketData>();
  // const [comments, setComments] = useState<TicketCommentData[]>([]);

  // const ticket_id = getParamFromURL("id");
  // const getSingleTicketAndComments = async () => {
  //   try {
  //     if (ticket_id === null) return;
  //     const tickets: AxiosResponse<any, any> = await Api.getSingleTicket(
  //       ticket_id
  //     );
  //     setTicket(tickets.data[0]);
  //     const comments: AxiosResponse<any, any> =
  //       await Api.getSingleTicketComments(ticket_id);
  //     console.log("comments.data", comments.data);
  //     setComments(comments.data);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getSingleTicketAndComments();
  // }, []);

  // if (!ticket) return null;

  return (
    <Layout>
      {/* <SingleTicketContent
        ticket={ticket}
        comments={comments}
        updateData={getSingleTicketAndComments}
      /> */}
    </Layout>
  );
};

export default SingleLawPage;
