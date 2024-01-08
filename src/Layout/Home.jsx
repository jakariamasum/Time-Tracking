import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner/>
            <Features/>
            <Outlet />
        </div>
    );
};

export default Home;