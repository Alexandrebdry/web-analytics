import { useState } from "react";
import { deleteCredentials } from "../../services/CredentialsService";
import { deleteTag } from "../../services/TagsService";

const CredentialsListElement = ({credentials, refreshCredentials}) => {
    const [isHidden, setIsHidden] = useState(true);


    const onClickDelete = async () => {
        await deleteCredentials(credentials.id);
        refreshCredentials();
    }

    return (
        <tr>
            <th className="text-primary">{credentials.id}</th>
            <td>{credentials.appID}</td>
            <td>
                <div className="flex items-center">
                    <div style={{minWidth: '260px'}}>{
                        isHidden 
                            ? credentials.appSecret.replace(/./g, '*')
                            : credentials.appSecret
                    }
                    </div>
                    <button
                        onClick={() => setIsHidden(!isHidden)}
                        className="btn btn-outline btn-neutral ml-2"
                    >
                        {
                            isHidden
                                ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                              </svg>                                                            
                        }
                    </button>
                </div>
            </td>
            <td className="flex gap-2">
                <button className="btn btn-warning" onClick={onClickDelete}>Supprimer</button>
            </td>
        </tr>
    );
};

export default CredentialsListElement;