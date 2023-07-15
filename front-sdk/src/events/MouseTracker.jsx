import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sendData } from '../sendData';

function MouseTracker({ appID, appSecret }) {
    const location = useLocation();
    const data = [];

    useEffect(() => {
        function collectData(event) {
            const { pageX, pageY } = event;
            const { scrollX, scrollY } = window;

            const x = pageX - scrollX;
            const y = pageY - scrollY;

            data.push({ x, y });
        }

        function sendAndResetData() {
            if (data.length > 0) {
                sendData({
                    data: data,
                    type: 'mouse',
                    appSecret: appSecret,
                    appID: appID,
                    callback: () => {
                        data.length = 0;
                    },
                });
            }
        }

        window.addEventListener('mousemove', collectData);
        window.addEventListener('scroll', collectData);
        window.addEventListener('beforeunload', sendAndResetData);

        sendAndResetData();

        return () => {
            window.removeEventListener('mousemove', collectData);
            window.removeEventListener('scroll', collectData);
            window.removeEventListener('beforeunload', sendAndResetData);
        };
    }, [appID, appSecret, location]);

    return null;
}

export default MouseTracker;