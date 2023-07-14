import { useEffect, useRef } from 'react';
import { generateUserId } from '../auth/UserUtils';
import { URL } from '../AnalyticsSDK';
import { useLocation } from 'react-router-dom';

function PageTracker({appID, appSecret}) {
    const userIdRef = useRef(null);
    const visitedPagesRef = useRef([]);
    const sendTimeoutRef = useRef(null);
    const location = useLocation();

    const userId = generateUserId();

    useEffect(() => {
        userIdRef.current = userId;

        return () => {
            clearTimeout(sendTimeoutRef.current);
        };
    }, [userId]);

    useEffect(() => {
        function sendPageEvent() {
            if (visitedPagesRef.current.length === 0) {
                return;
            }

            const eventData = {
                userId: userIdRef.current,
                pages: visitedPagesRef.current,
                timestamp: new Date().toISOString(),
            };

            if (navigator.sendBeacon && URL) {
                const success = navigator.sendBeacon(URL + '/pages', JSON.stringify({...eventData, appID:appID,appSecret:appSecret}));


                if (success) {
                    visitedPagesRef.current = [];
                }
            }
        }

        function scheduleSendPageEvent() {
            clearTimeout(sendTimeoutRef.current);
            sendTimeoutRef.current = setTimeout(() => {
                sendPageEvent();
                scheduleSendPageEvent();
            }, 5000);
        }

        scheduleSendPageEvent();

        return () => {
            clearTimeout(sendTimeoutRef.current);
        };
    }, []);

    useEffect(() => {
        visitedPagesRef.current = Array.from(new Set([...visitedPagesRef.current, location.pathname]));
    }, [location.pathname]);

    return null;
}

export default PageTracker;