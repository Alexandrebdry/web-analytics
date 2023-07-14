import { useEffect, useState } from "react";
import { createCredentials, findAllCredentials } from "../services/CredentialsService";
import CredentialsList from "../components/credentials/CredentialsList";

const CredentialsPage = () => {
    // LIST
    const [credentials, setCredentials] = useState([]);
    
    const getCredentials = async () => {
        const response = await findAllCredentials();
        if (response) {
            setCredentials(response);
        }
    }

    useEffect(() => {
        getCredentials();
    }, []);

    const onClickCreate = async () => {
        await createCredentials();
        refreshCredentials();
    }

    const refreshCredentials = () => {
        getCredentials();
    }

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-2xl">Identifiants</h1>
                <button className="btn btn-primary" onClick={onClickCreate}>Créer un identifiant</button>
            </div>

            <CredentialsList credentials={credentials} refreshCredentials={refreshCredentials} />
        </div>
    );
};

export default CredentialsPage;