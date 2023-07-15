import CredentialsListElement from "./CredentialsListElement";

const CredentialsList = ({credentials, refreshCredentials}) => {
    return (
        <div className="overflow-x-auto mt-5">
            <table className="table">
                <thead>
                <tr>
                    <th className="text-primary">Id</th>
                    <th>App Id</th>
                    <th>App Secret</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        credentials
                        .sort((A, B) => A.id - B.id)
                        .map((singleCredentials) => {
                            return <CredentialsListElement 
                                key={singleCredentials.id} 
                                credentials={singleCredentials}
                                refreshCredentials={refreshCredentials}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CredentialsList;