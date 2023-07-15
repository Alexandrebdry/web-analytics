import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { sendData } from '../sendData';

function MouseTracker({ appID, appSecret }) {
    const location = useLocation();
    const dataRef = useRef([]);

    function sendAndResetData() {
        if (dataRef.current.length > 0) {
            sendData({
                data: dataRef.current,
                type: 'mouse',
                appSecret: appSecret,
                appID: appID,
                callback: () => {
                    dataRef.current = [];
                },
            });
        }
    }

    useEffect(() => {
        function collectData(event) {
            const { pageX, pageY } = event;
            const { scrollX, scrollY } = window;

            const x = pageX - scrollX;
            const y = pageY - scrollY;

            dataRef.current.push({ x, y });
        }

        const interval = setInterval(sendAndResetData, 60000); // Send data every minute

        window.addEventListener('mousemove', collectData);
        window.addEventListener('scroll', collectData);
        window.addEventListener('beforeunload', sendAndResetData);

        return () => {
            clearInterval(interval);
            window.removeEventListener('mousemove', collectData);
            window.removeEventListener('scroll', collectData);
            window.removeEventListener('beforeunload', sendAndResetData);
        };
    }, [appID, appSecret]);

    useEffect(() => {
        sendAndResetData();
    }, [location]);

    return null;
}

export default MouseTracker;
