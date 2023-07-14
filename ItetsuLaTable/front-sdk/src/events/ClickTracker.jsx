import { useEffect, useRef } from "react";
import {URL} from "../AnalyticsSDK" ;

export function ClickTracker({appID, appSecret}) {
    const clickEventsRef = useRef([]);

    function trackClickEvent(element, path) {
        clickEventsRef.current.push({ element, path });
    }

    function sendClickEvents() {
        if (clickEventsRef.current.length === 0) {
            return;
        }

        if (navigator.sendBeacon && URL) {
            const eventsToSend = clickEventsRef.current.slice();
            clickEventsRef.current = [];

            eventsToSend.forEach((event) => {
                navigator.sendBeacon(URL + "/click", JSON.stringify({...event, appID: appID, appSecret: appSecret}));
            });
        }
    }

    function handleClickEvent(event, location = "example") {
        const path = location;
        const element = event.target;
        trackClickEvent(element, path);
    }

    useEffect(() => {
        document.addEventListener("click", handleClickEvent);
        const interval = setInterval(sendClickEvents, 5000);

        return () => {
            clearInterval(interval);
            document.removeEventListener("click", handleClickEvent);
        };
    }, []);

    return null;
}