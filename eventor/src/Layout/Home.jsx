import Pricing from "../Components/Pricing/Pricing";
import QuestionAnswer from "../Components/QuestionAnswer/QuestionAnswer";
import Services from "../Components/Services/Services";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Slider from "../Components/Slider/Slider";
import { Helmet } from "react-helmet-async";

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <Helmet>
                <title>Eventor | Home</title>
            </Helmet>
            <Slider></Slider>
            <Services></Services>
            <Pricing></Pricing>
            <QuestionAnswer></QuestionAnswer>
            
        </div>
    );
};

export default Home;