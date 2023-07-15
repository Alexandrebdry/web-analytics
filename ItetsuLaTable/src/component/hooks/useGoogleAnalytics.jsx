import ReactGA from "react-ga";

const useAnalyticsEventTracker = () => {
    const eventTracker = ( {category  , action , label } ) => {
        return ReactGA.event({category, action, label});
    }
    return eventTracker ;
}
export default useAnalyticsEventTracker;