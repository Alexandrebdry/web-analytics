import { useEffect, useState } from "react";
import { updateRoles } from "../../../services/RolesService";

const ROLES = {
    'ROLE_ADMIN': 'Administrateur',
    'ROLE_MAINTAINER': 'Modérateur'
}

const UserRolesForm = ({ user, closeModal }) => {
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

    const handleSubmit = (event) => {
        event.preventDefault();

        updateRoles(user.id, roles);
        user.roles = roles;
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

            <button className="btn btn-primary mt-10">Enregistrer</button>
        </form>
    );
};

export default UserRolesForm;