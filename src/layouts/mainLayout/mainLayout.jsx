import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./mainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
