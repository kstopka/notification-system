import Layout from "../components/Layout";
import VotesContent from "../components/VotesContent";

interface VotesPageProps {}

const VotesPage: React.FC<VotesPageProps> = () => {
  return (
    <Layout>
      <VotesContent />
    </Layout>
  );
};

export default VotesPage;
