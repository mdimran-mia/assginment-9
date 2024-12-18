import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../page/Home/Home";
import NewSite from "../page/NewSite/NewSite";
import Login from "../page/Login/Login";
import Registration from "../page/Registration/Registration";
import About from "../page/About/About";
import AreaPropertiesDetails from "../components/Card/AreaPropertiesDetails/AreaPropertiesDetails";
import PropertiesDetails from "../components/LatestPropertise/PropertiesDetails/PropertiesDetails";
import AgentDetails from "../components/Agents/AgentDetails/AgentDetails";
import Contact from "../page/Contact/Contact";
import AreaPropertiesDetailedProperties from "../components/Card/AreaPropertiesDetailedProperties/AreaPropertiesDetailedProperties";
import TermsAndConditions from "../page/Terms&Conditions/TermsAndConditions";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <PrivetRoute><About /></PrivetRoute> },
            { path: "/area/:id", element: <PrivetRoute><AreaPropertiesDetails /></PrivetRoute> },
            { path: "/newSite", element: <PrivetRoute><NewSite /></PrivetRoute> },
            // Ensure unique routes for property details
            { path: "/property/:id", element: <PrivetRoute><PropertiesDetails /></PrivetRoute> },
            { path: "/properties/:id", element: <PrivetRoute><AreaPropertiesDetailedProperties /></PrivetRoute> },
            { path: "/agent/:id", element: <PrivetRoute><AgentDetails /></PrivetRoute> },
            { path: "/contact", element:  <PrivetRoute><Contact /></PrivetRoute> },
            { path: "/login", element: <Login /> },
            { path: "/registration", element: <Registration /> },
            {path:"/terms", element:<TermsAndConditions/> }
        ],
    },
]);

export default router;
