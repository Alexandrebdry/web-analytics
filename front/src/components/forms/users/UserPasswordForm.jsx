import { useState } from "react";
import { updateUserPassword } from "../../../services/UsersService";

const UserPasswordForm = ({user, logout}) => {
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== verifyPassword) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }

        await updateUserPassword({
            password: password
        });
        logout();
    }

    return (
        <form onSubmit={handleSubmit} className="container">
            <h3 className="text-xl">Mot de passe</h3>

            <div className="form-group">
                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Mot de passe</span>
                    </label>
                    <input type="password" placeholder="Mot de passe" value={password} onChange={(event) => setPassword(event.target.value)} className="input-primary w-full input input-bordered  max-w-sm"/>
                </div>

                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Vérification du mot de passe</span>
                    </label>
                    <input type="password" placeholder="Vérification du mot de passe" value={verifyPassword} onChange={(event) => setVerifyPassword(event.target.value)} className="input-primary w-full input input-bordered  max-w-sm"/>
                </div>
            </div>

            <div className="mt-5">
                <button type="submit" className="btn btn-primary">Modifier mon mot de passe</button>
            </div>
        </form>
    );
}

export default UserPasswordForm;