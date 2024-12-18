import LatestProperties from "../../components/LatestPropertise/LatestProperties";
import Slider from "../../components/Slider/Slider";

const NewSite = () => {
    return (
        <div>
            <Slider/>
            <div className="mt-5">
                <LatestProperties />
            </div>
        </div>
    );
};

export default NewSite;
