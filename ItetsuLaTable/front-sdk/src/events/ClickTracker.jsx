import { useEffect, useRef } from "react";
import {sendData} from "../sendData";

export function ClickTracker({appID, appSecret}) {
    const clickEventsRef = useRef([]);

    function trackClickEvent(element, path) {
        clickEventsRef.current.push({ element, path });
    }

    function sendClickEvents() {
        if (clickEventsRef.current.length === 0) {
            return;
        }

        const eventsToSend = clickEventsRef.current.slice();
        clickEventsRef.current = [];

        sendData({
            data: eventsToSend?.length,
            appID: appID,
            appSecret: appSecret,
            type: "click",
        }) ;


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