import AdditionalTicketContent from "../components/AdditionalTicket";
import Layout from "../components/Layout";

interface AdditionalTicketProps {}

const AdditionalTicketPage: React.FC<AdditionalTicketProps> = () => {
  return (
    <Layout>
      <AdditionalTicketContent />
    </Layout>
  );
};

export default AdditionalTicketPage;
