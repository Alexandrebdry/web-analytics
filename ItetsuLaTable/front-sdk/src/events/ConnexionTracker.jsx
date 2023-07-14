import { useEffect, useRef } from 'react';
import { generateUserId } from '../auth/UserUtils';
import {sendData} from "../sendData";

function ConnectionTracker({appID, appSecret}) {
    const userIdRef = useRef(null);
    const uniqueConnectionsRef = useRef(new Set());
    const localityRef = useRef(null);

    const userId = generateUserId();

    useEffect(() => {
        userIdRef.current = userId;

        const interval = setInterval(() => {
            sendConnectionEvent();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [userId]);

    useEffect(() => {
        function handleGeolocation(position) {
            if(!position) {
                return;
            }
            if(!position.coords) {
                return;
            }
            if (!position.coords.latitude || !position.coords.longitude) {
                return;
            }
            const { latitude, longitude } = position.coords;

            const locality =  `lat:${latitude},lon:${longitude}` ||  'Paris, France';
            localityRef.current = locality;
        }

        function handleGeolocationError(error) {
            console.log('Erreur de géolocalisation:', error);
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleGeolocation, handleGeolocationError);
        }
    }, []);

    function sendConnectionEvent() {
        if (uniqueConnectionsRef.current.has(userIdRef.current)) {
            return; // Ne pas envoyer l'événement si l'utilisateur est déjà compté
        }

        if (navigator.sendBeacon) {

            sendData({
                data: {
                    userId: userIdRef.current,
                    locality: localityRef.current, // Ajout de la localité dans l'événement
                },
                appID: appID,
                appSecret: appSecret,
                type: "connexion",
                callback: () => {
                    uniqueConnectionsRef.current.add(userIdRef.current);
                }
            }) ;
        }
    }

    return null;
}

export default ConnectionTracker;