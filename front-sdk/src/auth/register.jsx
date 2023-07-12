export const  isAppRegistered = async (appId, appSecret, callback) => {

    try {
        const response = await fetch("http://localhost:3000/api/v1/analytics/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                appId: appId,
                appSecret: appSecret,
            })
        });

        callback(response.status === 200) ;


    } catch (error) {
        console.error("SDK Error: ", error);
    }

}