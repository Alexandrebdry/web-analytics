import {useEffect} from "react";
import {sendData} from "../sendData";

function MouseTracker({ appID, appSecret }) {
    useEffect(() => {
        let data = [];

        function collectData(event) {
            const { pageX, pageY } = event;
            const { scrollX, scrollY } = window;

            const x = pageX - scrollX;
            const y = pageY - scrollY;

            data.push({ x, y });
        }

        window.addEventListener('mousemove', collectData);
        window.addEventListener('scroll', collectData);

        const interval = setInterval(() => {
            if (data.length > 0) {
                sendData({
                    data: data,
                    type: 'mouse',
                    appSecret: appSecret,
                    appID: appID,
                    callback: () => {
                        data = [];
                    },
                });
            }
        }, 5000);

        return () => {
            window.removeEventListener('mousemove', collectData);
            window.removeEventListener('scroll', collectData);
            clearInterval(interval);
        };
    }, []);

    return null;
}

export default MouseTracker;