import HeaderComponent from "@/component/HeaderComponent";
import {Fragment, useEffect} from "react";
import Router from "./router/Router.jsx" ;
import FooterComponent from "@/component/FooterComponent";
import ReactGA from 'react-ga';
import AnalyticsSDK from "react-analytics-sdk-esgi"
function App() {

    const TRACKING_ID = "G-JCBT80D428";
    ReactGA.initialize(TRACKING_ID);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <Fragment>
            <AnalyticsSDK
                appID={"606a54ca-c368-46f7-a16d-8448e917437b"}
                appSECRET={"82e3e439-808c-4fbd-b450-955497e173db"}
            />
            <HeaderComponent/>
            <Router/>
            <FooterComponent/>
        </Fragment>
    );

}

export default App;