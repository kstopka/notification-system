import HomeContent from "../components/Home";
import Layout from "../components/Layout";

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
};

export default HomePage;
