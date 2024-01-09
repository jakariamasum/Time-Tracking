import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Plans from "../components/Plans/Plans";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Features/>
            <Plans/>
            <Testimonials/>
        </div>
    );
};

export default Home;