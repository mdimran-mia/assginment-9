import Agents from "../../components/Agents/Agents";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import LatestProperties from "../../components/LatestPropertise/LatestProperties";
import HappyClient from "../../components/HappyClient/HappyClient";
import Footer from "../../components/Footer/Footer";




const Home = () => {
    return (
        <div className="bg-slate-200">
            <Banner/>
            <Card/>
            <LatestProperties/>
            <Agents/>
            <HappyClient/>
            <Footer/>
        </div>
    );
};

export default Home;
