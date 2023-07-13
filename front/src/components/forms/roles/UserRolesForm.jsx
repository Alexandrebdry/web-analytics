import { useEffect, useState } from "react";
import { updateRoles } from "../../../services/RolesService";

const ROLES = {
    'ROLE_ADMIN': 'Administrateur',
    'ROLE_MAINTAINER': 'Modérateur',
    'ROLE_USER': 'Utilisateur'
}

const UserRolesForm = ({ user, closeModal, refreshUsers }) => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        if (user) {
            setRoles(user.roles);
        }
    }, [user]);

    const handleChange = (event) => {
        const { value } = event.target;
        
        if (roles.includes(value)) {
            setRoles(roles.filter((role) => role !== value));
        } else {
            setRoles([...roles, value]);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(roles);

        await updateRoles({
            userId: user.id, 
            roles: roles
        });

        closeModal();
        refreshUsers();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Rôles</span>
                    </label>
                    <select 
                        multiple 
                        onChange={handleChange} 
                        value={roles} 
                        className="select"
                    >
                        {
                            Object.keys(ROLES).map((role) => {
                                return (
                                    <option key={role} value={role}>{ROLES[role]}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-10">Enregistrer</button>
        </form>
    );
};

export default UserRolesForm;