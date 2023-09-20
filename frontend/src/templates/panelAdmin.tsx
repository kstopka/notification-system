import { useEffect } from "react";
import Api from "../api/API";
import { useNavigate } from "react-router-dom";
import URL_PATHS from "../constants/routes";

interface PanelAdminPageProps {}

const PanelAdminPage: React.FC<PanelAdminPageProps> = () => {
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const result = await Api.getUsers();
      console.log("result", result.data);
    } catch (error) {}
  };

  return (
    <>
      <h1>Panel Admin</h1>
      <button onClick={() => navigate(URL_PATHS.account.slug)}>Account</button>
      <button onClick={() => getUsers()}>users</button>
    </>
  );
};

export default PanelAdminPage;
