import {useEffect, useRef} from "react";

export function ClickTracker() {
    const clickEvents = useRef([]);

    function trackClickEvent(element, path) {
        clickEvents.current.push({ element, path });
    }

    function sendClickEvents() {
        clickEvents.current.forEach((event) => {
            if (navigator.sendBeacon) {
                navigator.sendBeacon(URL + "/click", JSON.stringify(event));
            }
        });
        clickEvents.current = [];
    }

    function handleClickEvent(event, location = "example") {
        const path = location;
        const element = event.target;
        trackClickEvent(element, path);
    }

    useEffect(() => {
        document.addEventListener("click", (event) => {handleClickEvent(event, window.location.pathname)});
        const interval = setInterval(sendClickEvents, 5000);

        return () => {
            clearInterval(interval);
            document.removeEventListener("click", handleClickEvent);
        };
    }, []);

    return null;
}