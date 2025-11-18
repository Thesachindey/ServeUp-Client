import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";


const MainLayout = () => {
  return (
    <div>
      <div >
        <NavBar />
        <div className="bg-base-200 min-h-screen">
          <Outlet />
        </div>
        <Footer/>
      </div>
      <Toaster/>
    </div>
  );
};

export default MainLayout;