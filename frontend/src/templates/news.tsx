import Layout from "../components/Layout";
import NewsContent from "../components/News";

interface NewsPageProps {}

const NewsPage: React.FC<NewsPageProps> = () => {
  return (
    <Layout>
      <NewsContent />
    </Layout>
  );
};

export default NewsPage;
