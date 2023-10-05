import Layout from "../components/Layout";
import TicketsContent from "../components/Tickets";

interface TicketsPageProps {}

const TicketsPage: React.FC<TicketsPageProps> = () => {
  return (
    <Layout>
      <TicketsContent />
    </Layout>
  );
};

export default TicketsPage;
