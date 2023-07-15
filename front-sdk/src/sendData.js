import {generateUserId} from "./auth/UserUtils";
import * as parser from "ua-parser-js" ;
const URL = "http://localhost:3000" ;
const eventUrl = `${URL}/events` ;
const tagUrl = `${URL}/tags/comment` ;

export function sendData({
    data,
    appID,
    appSecret,
    type,
    callback
}) {

    const parser = new UAParser() ;

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
            os: parser.getOS().name,
            osVersion: parser.getOS().version,
            browser: parser.getBrowser().name,
            browserVersion: parser.getBrowser().version,
            deviceType: parser.getDevice().type,
            deviceVendor: parser.getDevice().vendor,
            deviceModel: parser.getDevice().model,
            cpuArchitecture: parser.getCPU().architecture,
            engineName: parser.getEngine().name,
            engineVersion: parser.getEngine().version,
        }
    }

    if(navigator && navigator.sendBeacon) {
        const success = navigator.sendBeacon(eventUrl, JSON.stringify(eventData)) ;
        if(success)
            if(callback)
                callback() ;
    } else {
       fetch(eventUrl, {
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

export async function findTagByComment ({
    comment,
    appID,
    appSecret,
}) {

    try {
        const response = await fetch(`${tagUrl}/${comment}`,{
            headers: {
                "Content-Type": "application/json",
                "app-id": appID,
                "app-secret": appSecret,
            }
        }) ;
        const data = await response.json() ;
        if(data?.id)
            return data ;
        else
            return null ;
    }
    catch (e) {
        console.log(e) ;
    }

}



