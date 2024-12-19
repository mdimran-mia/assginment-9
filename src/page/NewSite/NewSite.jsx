import LatestProperties from "../../components/LatestPropertise/LatestProperties";
import Sliders from "../../components/Sliders/Sliders";

const NewSite = () => {
    return (
        <div>
            <Sliders/>
            <div className="mt-5">
                <LatestProperties />
            </div>
        </div>
    );
};

export default NewSite;
