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
                appID={"zqdqz"}
                appSECRET={"sefd"}
            />
            <HeaderComponent/>
            <Router/>
            <FooterComponent/>
        </Fragment>
    );

}

export default App;