import Agents from "../../components/Agents/Agents";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import HappyClient from "../../components/HappyClient/HappyClient";
import LatestProperties from "../../components/LatestPropertise/LatestProperties";


const Home = () => {
    return (
        <div className="bg-slate-200">
            <Banner/>
            <Card/>
            <LatestProperties />
            <Agents/>
            <HappyClient/>
            
            <Footer/>
        </div>
    );
};

export default Home;
