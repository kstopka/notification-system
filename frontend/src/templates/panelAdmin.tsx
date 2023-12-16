import { useEffect } from "react";
import Api from "../api/API";
import { useNavigate } from "react-router-dom";
import URL_PATHS from "../constants/routes";
import Layout from "../components/Layout";
import ServiceProvidersApi from "../api/ServiceProvidersApi";

interface PanelAdminPageProps {}

const PanelAdminPage: React.FC<PanelAdminPageProps> = () => {
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const result = await ServiceProvidersApi.get();
      console.log("result.data", result.data);
    } catch (error) {}
  };

  return (
    <Layout isAdmin>
      <h1>Panel Admin</h1>
      <button onClick={() => navigate(URL_PATHS.account.slug)}>Account</button>
      <button onClick={() => getUsers()}>users</button>
    </Layout>
  );
};

export default PanelAdminPage;
