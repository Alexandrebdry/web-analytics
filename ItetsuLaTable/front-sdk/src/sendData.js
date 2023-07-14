import {generateUserId} from "./auth/UserUtils";
const URL = "http://localhost:3000/api/v1/analytics" ;

export function sendData({
    data,
    appID,
    appSecret,
    type,
    callback
}) {


    const eventData = {
        date: new Date() ,
        uuid: generateUserId() ,
        appID: appID,
        appSecret: appSecret,
        data: data,
        type: type,
        deviceData: {
            userAgent: navigator.userAgent,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            language: navigator.language,
            vendor: navigator.vendor,
        }
    }

    if(navigator && navigator.sendBeacon) {
        const success = navigator.sendBeacon(URL, JSON.stringify(eventData)) ;
        if(success)
            if(callback)
                callback() ;
    } else {
       fetch(URL, {
           method: "POST",
           headers: {
                    "Content-Type": "application/json"
           },
              body: JSON.stringify(eventData)
       }).then(() => {
              if(callback)
                callback() ;
       })
    }
}