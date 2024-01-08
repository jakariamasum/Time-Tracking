import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner/>
            <Outlet />
        </div>
    );
};

export default Home;