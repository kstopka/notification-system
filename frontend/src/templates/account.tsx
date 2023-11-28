import Layout from "../components/Layout";
import AccountContent from "../components/Account";

interface AccountPageProps {}

const AccountPage: React.FC<AccountPageProps> = () => {
  return (
    <Layout>
      <AccountContent />
    </Layout>
  );
};

export default AccountPage;
