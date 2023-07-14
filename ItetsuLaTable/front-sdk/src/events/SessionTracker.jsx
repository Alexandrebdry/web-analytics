import  { useEffect, useRef } from 'react';
import {URL} from "../AnalyticsSDK" ;

function SessionTracker({appID, appSecret}) {
    const sessionStartTimeRef = useRef(null);
    const lastActivityTimeRef = useRef(null);
    const sendIntervalRef = useRef(null);

    useEffect(() => {
        function setSessionStartTime() {
            const startTime = new Date().getTime();
            localStorage.setItem('sessionStartTime', startTime.toString());
            sessionStartTimeRef.current = startTime;
        }

        function updateLastActivityTime() {
            const lastActivityTime = new Date().getTime();
            localStorage.setItem('lastActivityTime', lastActivityTime.toString());
            lastActivityTimeRef.current = lastActivityTime;
        }

        function checkInactivity() {
            const fifteenMinutes = 15 * 60 * 1000; // 15 minutes en millisecondes
            const inactiveTime = new Date().getTime() - lastActivityTimeRef.current;

            if (inactiveTime >= fifteenMinutes) {
                endSession();
            }
        }

        function endSession() {
            localStorage.removeItem('sessionStartTime');
            localStorage.removeItem('lastActivityTime');
            clearInterval(sendIntervalRef.current);
        }

        function sendSessionData() {
            const sessionStartTime = localStorage.getItem('sessionStartTime');
            const lastActivityTime = localStorage.getItem('lastActivityTime');

            const eventData = {
                sessionStartTime,
                lastActivityTime,
            };

            if (navigator.sendBeacon) {
                navigator.sendBeacon(URL, JSON.stringify({...eventData,appID:appID,appSecret:appSecret}));
            } else {
                console.error('L\'API Beacon n\'est pas prise en charge dans ce navigateur. Utilisez une autre méthode d\'envoi.');
            }
        }

        setSessionStartTime();
        updateLastActivityTime();

        const sendInterval = setInterval(sendSessionData, 5000);
        sendIntervalRef.current = sendInterval;

        const checkInterval = setInterval(checkInactivity, 60 * 1000);

        return () => {
            clearInterval(sendInterval);
            clearInterval(checkInterval);
        };
    }, []);

    return null;
}

export default SessionTracker;