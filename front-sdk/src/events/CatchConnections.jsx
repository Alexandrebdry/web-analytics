import { useEffect, useRef } from "react";
import { generateUserId } from "../auth/UserUtils";
import { URL } from "../config";

async function CatchConnection(mail, success) {
    const date = moment();
    const connection = {
        date: date.format("DD-MM-YYYY"),
        mail,
        success,
        // true si la connexion s'est bien passé, false sinon; pour traquer les porblèmes de connexion ->
        // Si trop de connexions échouées on pourra en déduire qu'il y a un problème chez nous
    };
    await fetch("http://localhost:8000/connection/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(connection),
    })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    return null;
}

export default CatchConnection;
