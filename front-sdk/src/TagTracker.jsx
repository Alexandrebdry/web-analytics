import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {findTagByComment, sendData} from "./sendData";


const TagTracker = ({ tagName, appID, appSecret }) => {
    const location = useLocation();
    const trackerRef = useRef(null);
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (pageData) {
                sendData({
                    data: { ...pageData, tagId : trackerRef.current.id },
                    type: tagName,
                    appSecret: appSecret,
                    appID: appID,
                    callback: () => {
                        setPageData(null);
                    }
                });
            }
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [pageData]);

    useEffect(() => {
        const trackTag = async () => {
            const tagExists = await findTagByComment({
                appID: appID,
                appSecret: appSecret,
                comment:tagName
            });

            if(tagExists) {
                const data = getPageData();
                if(data) {
                    setPageData(data);
                }
            }
        };

        const getPageData = () => {
            const { pathname, search } = location;
            const pageTitle = document.title;
            return {
                pathname,
                search,
                pageTitle,
            };
        };
        trackTag();
    }, [tagName, appID, appSecret, location]);

    return null;
};

export default TagTracker;