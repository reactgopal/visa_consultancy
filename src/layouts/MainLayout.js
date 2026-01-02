import { Outlet } from "react-router-dom";
import HeaderLayout from "../components/Header/HeaderLayout";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <HeaderLayout />
      <main className="min-h-screen ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
