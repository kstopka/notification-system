import { useEffect } from "react";
import Api from "../api/API";
import { useNavigate } from "react-router-dom";
import URL_PATHS from "../constants/routes";
import Layout from "../components/Layout";

interface PanelAdminPageProps {}

const PanelAdminPage: React.FC<PanelAdminPageProps> = () => {
  const navigate = useNavigate();

  return (
    <Layout isAdmin>
      <h1>Panel Admin</h1>
      <button onClick={() => navigate(URL_PATHS.account.slug)}>Account</button>
      {/* <button onClick={() => getUsers()}>users</button> */}
    </Layout>
  );
};

export default PanelAdminPage;
