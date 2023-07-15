import {useEffect, useState} from "react";
import {ClickTracker} from "./events/ClickTracker";
import {isAppRegistered} from "./auth/register";
import SessionTracker from "./events/SessionTracker";
import ConnexionTracker from "./events/ConnexionTracker";
import PageTracker from "./events/PageTracker";
import MouseTracker from "./events/MouseTracker";


export default function AnalyticsSDK ({ appID, appSECRET }) {

    const [isRegistered, setIsRegistered] = useState(false) ;


    useEffect(() => {
        isAppRegistered(appID, appSECRET, (data) => {
            setIsRegistered(data) ;
        }) ;

    },[]) ;

    if (isRegistered) {

        return (
            <>
                <ClickTracker
                    appID={appID}
                    appSecret={appSECRET}
                />
                <PageTracker
                    appID={appID}
                    appSecret={appSECRET}
                />
                <SessionTracker
                    appID={appID}
                    appSecret={appSECRET}
                />
                <ConnexionTracker
                    appID={appID}
                    appSecret={appSECRET}
                />
                <MouseTracker
                    appID={appID}
                    appSecret={appSECRET}
                />
            </>

        )
    }

}