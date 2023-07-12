import  { useEffect, useRef } from 'react';
import { generateUserId } from '../auth/UserUtils';
import { URL } from '../index.jsx';

function PageTracker() {
    const userIdRef = useRef(null);
    const visitedPagesRef = useRef([]);
    const sendTimeoutRef = useRef(null);

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

            if (navigator.sendBeacon && URL) {
                const eventData = {
                    userId: userIdRef.current,
                    pages: visitedPagesRef.current,
                    timestamp: new Date().toISOString(),
                };

                const success = navigator.sendBeacon(URL + '/pages', JSON.stringify(eventData));

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

    function trackPage(page) {
        if (page) {
            visitedPagesRef.current = Array.from(new Set([...visitedPagesRef.current, page]));
        }
    }

    useEffect(() => {
        const handlePageChange = () => {
            const currentPage = window.location.pathname;
            trackPage(currentPage);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('popstate', handlePageChange);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('popstate', handlePageChange);
            }
        };
    }, []);

    return null;
}

export default PageTracker;