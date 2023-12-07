import Layout from "../components/Layout";
import ScheduleContent from "../components/ScheduleContent";

interface ScheduleProps {}

const SchedulePage: React.FC<ScheduleProps> = () => {
  return (
    <Layout>
      <ScheduleContent />
    </Layout>
  );
};

export default SchedulePage;
