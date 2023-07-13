import { useState } from "react";
import { updateUser } from "../../../services/UsersService";

const UserForm = ({user, setUser}) => {
    const [username, setUsername] = useState(user.username ?? '');
    const [email, setEmail] = useState(user.email ?? '');
    const [companyName, setCompanyName] = useState(user.companyName ?? '');
    const [companyKBIS, setCompanyKBIS] = useState(user.companyKBIS ?? '');
    const [companyURL, setCompanyURL] = useState(user.companyURL ?? '');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updated = await updateUser({
            username: username,
            email: email,
            companyName: companyName,
            companyKBIS: companyKBIS,
            companyURL: companyURL
        });

        setUser(updated);
    }

    return (
        <form onSubmit={handleSubmit} className="container">
            <h3 className="text-xl">Informations personnelles</h3>

            <div className="form-group">
                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Nom d'utilisateur</span>
                    </label>
                    <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(event) => setUsername(event.target.value)} className="input-primary w-full input input-bordered  max-w-sm"/>
                </div>

                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Email</span>
                    </label>
                    <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} className="input-primary w-full input input-bordered  max-w-sm"/>
                </div>

                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Nom de l'entreprise</span>
                    </label>
                    <input type="text" placeholder="Nom de l'entreprise" value={companyName} onChange={(event) => setCompanyName(event.target.value)} className="input-primary w-full input input-bordered  max-w-sm"/>
                </div>

                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Numéro de KBIS</span>
                    </label>
                    <input type="text" placeholder="Numéro de KBIS" value={companyKBIS} onChange={(event) => setCompanyKBIS(event.target.value)} className="input-primary w-full input input-bordered  max-w-sm"/>
                </div>

                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">URL du site de l'entreprise</span>
                    </label>
                    <input type="text" placeholder="URL du site de l'entreprise" value={companyURL} onChange={(event) => setCompanyURL(event.target.value)} className="input-primary w-full input input-bordered  max-w-sm"/>
                </div>
            </div>

            <div className="mt-5">
                <button type="submit" className="btn btn-primary">Modifier mon profil</button>
            </div>
        </form>
    );
}

export default UserForm;