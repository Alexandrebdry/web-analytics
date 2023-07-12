import  { useEffect, useRef } from 'react';

function SessionTracker() {
    const sessionStartTimeRef = useRef(null);
    const lastActivityTimeRef = useRef(null);

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
            clearInterval(interval);
        }

        setSessionStartTime();
        updateLastActivityTime();

        const interval = setInterval(checkInactivity, 60 * 1000); // Vérification toutes les minutes

        return () => {
            clearInterval(interval);
        };
    }, []);

    return null;

}

export default SessionTracker;