# React Analytics SDK
Ce SDK permet de tracker les événements de votre application React.


## Utilisation
/!\ Attention, le SDK utilise useLocation de react-router-dom. 
Il faut déclarer le SDK un contexte de routeur. (BrowserRouter, HashRouter, etc...)
```jsx
import {Fragment} from "react";
import AnalyticsSDK from "react-analytics-sdk-esgi"
function App() {
    return (
        <Fragment>
            <AnalyticsSDK
                appID={"606a54ca-c368-46f7-a16d-8448e917437b"}
                appSECRET={"82e3e439-808c-4fbd-b450-955497e173db"}
            />
            // votre application ici
        </Fragment>
    );
}

export default App;
```

Tag usage
```jsx
import {Fragment} from "react";
import {TagTrackerSDK} from "react-analytics-sdk-esgi";

function AProposPage() {
    return (
        <Fragment>
             <TagTrackerSDK
                appID={"606a54ca-c368-46f7-a16d-8448e917437b"}
                appSECRET={"82e3e439-808c-4fbd-b450-955497e173db"}
                tagName={"a-propos"}
            />
            // votre page ici
        </Fragment>
    );
}

export default AProposPage;
```

