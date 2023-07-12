import {useEffect, useState} from "react";
import {ClickTracker} from "./events/ClickTracker";
import {isAppRegistered} from "./auth/register";
import SessionTracker from "./events/SessionTracker";
import ConnexionTracker from "./events/ConnexionTracker";
import PageTracker from "./events/PageTracker";

export const URL = "http://localhost:3000/api/v1/analytics" ;
export default function AnalyticsSDK ({ appID, appSECRET }) {

    const [isRegistered, setIsRegistered] = useState(false) ;

    useEffect(() => {

        isAppRegistered(appID, appSECRET, (isRegistered) => {
            setIsRegistered(isRegistered) ;
        }) ;

    },[]) ;

    if (isRegistered) {

        return (
            <>
                <ClickTracker/>
                <PageTracker/>
                <SessionTracker/>
                <ConnexionTracker/>
            </>

        )
    }

}