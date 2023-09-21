import Layout from "../components/Layout";
import LoginForm from "../components/Login";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <Layout>
      <h1>Login PAGE</h1>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
