import { validateUser } from "../../services/UsersService";

const ROLES = {
    'ROLE_ADMIN': 'Administrateur',
    'ROLE_MAINTAINER': 'Modérateur',
    'ROLE_USER': 'Utilisateur'
}

const UsersListElement = ({user, selectUser, refreshUsers}) => {
    const onClickValidate = async () => {
        user.isVerified = true;
        await validateUser(user.id);
        refreshUsers();
    }

    const onClickRoles = () => {
        selectUser(user);
    }

    return (
        <tr>
            <th className="text-primary">{user.id}</th>
            <td>
                <div className="flex gap-2"><b>{user.username}</b> {user.isVerified 
                    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>                  
                    : ''
                }</div>
                <div>{user.email}</div>
                <div className="flex gap-2">
                    {user.roles
                        .filter(role => role !== 'ROLE_USER')
                        .map((role) => {
                            return <div className="badge badge-neutral" key={role}>
                                {ROLES[role] ? ROLES[role] : role}
                            </div>
                        })
                    }
                </div>
            </td>
            <td>
                <div><b>{user.companyName}</b></div>
                <div>KBIS : {user.companyKBIS}</div>
                <div>URL : {user.companyURL}</div>
            </td>
            <td className="flex flex-col gap-2">
                <button className="btn btn-primary" onClick={onClickRoles}>Gérer les rôles</button>
                {
                    user.isVerified
                    ? ''
                    : <button className="btn btn-primary" onClick={onClickValidate}>Valider le compte</button>
                }
            </td>
        </tr>
    );
};

export default UsersListElement;