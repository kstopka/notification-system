import LawsContent from "../components/Laws";
import Layout from "../components/Layout";

interface LawsPageProps {}

const LawsPage: React.FC<LawsPageProps> = () => {
  return (
    <Layout>
      <LawsContent />
    </Layout>
  );
};

export default LawsPage;
