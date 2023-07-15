import { useEffect, useRef } from 'react';
import { generateUserId } from '../auth/UserUtils';
import { useLocation } from 'react-router-dom';
import {sendData} from "../sendData";

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



                for (const page of visitedPagesRef.current) {
                    sendData({
                        data: page,
                        appSecret:appSecret,
                        appID:appID,
                        type:"pageVisited",
                        callback: () => {
                            visitedPagesRef.current = [];
                        }
                    }) ;
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