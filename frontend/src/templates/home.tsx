import { useEffect } from "react";
import Api from "../api/API";
import LoginForm from "../components/Login";

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  // useEffect(() => {
  //   Api.getUsers();
  // }, []);
  return (
    <>
      <h1>HOME PAGE</h1>
      <LoginForm />
    </>
  );
};

export default HomePage;
