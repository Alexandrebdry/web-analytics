import  { useEffect, useRef } from 'react';
import {sendData} from "../sendData";

function SessionTracker({appID, appSecret}) {
    const sessionStartTimeRef = useRef(null);
    const lastActivityTimeRef = useRef(null);
    const sendIntervalRef = useRef(null);

    useEffect(() => {
        function setSessionStartTime() {
            const startTime = new Date();
            localStorage.setItem('sessionStartTime', startTime.toString());
            sessionStartTimeRef.current = startTime;
        }

        function updateLastActivityTime() {
            const lastActivityTime = new Date();
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
            sendSessionData() ;
        }

        function sendSessionData() {
            const sessionStartTime = localStorage.getItem('sessionStartTime');
            const lastActivityTime = localStorage.getItem('lastActivityTime');

            sendData({
                data: {
                    sessionStartTime: sessionStartTime,
                    lastActivityTime: lastActivityTime
                },
                type:"session",
                appID:appID,
                appSecret: appSecret,
            })
        }

        setSessionStartTime();
        updateLastActivityTime();

        window.addEventListener('beforeunload', sendSessionData);
        const checkInterval = setInterval(checkInactivity, 60 * 1000);

        return () => {
            clearInterval(checkInterval);
        };
    }, []);

    return null;
}

export default SessionTracker;