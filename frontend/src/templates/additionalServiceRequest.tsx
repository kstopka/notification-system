import AdditionalServiceRequestContent from "../components/AdditionalServiceRequest";
import AdditionalTicketContent from "../components/AdditionalTicket";
import Layout from "../components/Layout";

interface AdditionalServiceRequestProps {}

const AdditionalServiceRequestPage: React.FC<
  AdditionalServiceRequestProps
> = () => {
  return (
    <Layout>
      <AdditionalServiceRequestContent />
    </Layout>
  );
};

export default AdditionalServiceRequestPage;
