export const  isAppRegistered = async (appId, appSecret, callback) => {
    return callback(true) ;
    try {
        const response = await fetch("http://localhost:3000/api/v1/analytics/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                appID: appId,
                appSecret: appSecret,
            })
        });

        return callback(response.status === 200) ;


    } catch (error) {
        console.error("SDK Error: ", error);
    }

}