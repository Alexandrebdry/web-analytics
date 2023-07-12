import {useState} from "react";
import Input from "../../Input.jsx";
import Button from "../../Button.jsx";
import {register} from "../../../services/AuthService.js";

export default function RegisterForm() {

    const [loading, setLoading] = useState(false);

    const [kbis, setKbis] = useState("");
    const [kbisError, setKbisError] = useState(false);
    const [kbisErrorMessage, setKbisErrorMessage] = useState("");

    const [companyName, setCompanyName] = useState("");
    const [companyError, setCompanyError] = useState(false);
    const [companyErrorMessage, setCompanyErrorMessage] = useState("");

    const [site, setSite] = useState("");
    const [siteError, setSiteError] = useState(false);
    const [siteErrorMessage, setSiteErrorMessage] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");

    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState(false);
    const [passwordConfirmErrorMessage, setPasswordConfirmErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (kbis.length < 1) {
            setKbisError(true);
            setKbisErrorMessage("Le KBIS est obligatoire");
        }

        if (companyName.length < 1) {
            setCompanyError(true);
            setCompanyErrorMessage("Le nom de l'entreprise est obligatoire");
        }

        if (site.length < 1) {
            setSiteError(true);
            setSiteErrorMessage("Le site de l'entreprise est obligatoire");
        }

        if (email.length < 1) {
            setEmailError(true);
            setEmailErrorMessage("L'email est obligatoire");
        }

        if (username.length < 1) {
            setUsernameError(true);
            setUsernameErrorMessage("Le nom d'utilisateur est obligatoire");
        }

        if (password.length < 1) {
            setPasswordError(true);
            setPasswordErrorMessage("Le mot de passe est obligatoire");
        }

        if (passwordConfirm.length < 1) {
            setPasswordConfirmError(true);
            setPasswordConfirmErrorMessage("La confirmation du mot de passe est obligatoire");
        }

        if (password !== passwordConfirm) {
            setPasswordError(true);
            setPasswordErrorMessage("Les mots de passe ne correspondent pas");

        }

        if (kbis.length < 1 || companyName.length < 1 || site.length < 1 || email.length < 1 || username.length < 1 || password.length < 1 || passwordConfirm.length < 1 || password !== passwordConfirm) {
            return;
        }
        setLoading(true) ;
        try {

            const response = await register({
                companyKBIS: kbis,
                companyName: companyName,
                companyURL: site,
                email: email.toLowerCase(),
                username: username,
                password: password,
            });
        }
        catch(error) {
            console.log(error);
        }
        setLoading(false) ;
    }

    return (
        <form  className={"my-4"} onSubmit={handleSubmit}>
            <div className={"flex flex-col sm:flex-row"}>
                <div className={"w-full sm:mr-2"}>
                    <Input
                        error={emailError}
                        errorMessage={emailErrorMessage}
                        value={email}
                        callback={setEmail}
                        type={"email"}
                        label={"Email"}
                        autoComplete={"email"}
                        placeholder={"john@doe.fr"}
                    />
                    <Input
                        error={usernameError}
                        errorMessage={usernameErrorMessage}
                        value={username}
                        callback={setUsername}
                        type={"text"}
                        autoComplete={"username"}
                        label={"Nom d'utilisateur"}
                        placeholder={"John Doe"}
                    />
                    <Input
                        error={passwordError}
                        errorMessage={passwordErrorMessage}
                        value={password}
                        callback={setPassword}
                        type={"password"}
                        label={"Mot de passe"}
                        placeholder={"password"}
                    />
                    <Input
                        error={passwordConfirmError}
                        errorMessage={passwordConfirmErrorMessage}
                        value={passwordConfirm}
                        callback={setPasswordConfirm}
                        type={"password"}
                        label={"Confirmation du mot de passe"}
                        placeholder={"password"}
                    />
                </div>
                <div className={"w-full"}>
                    <Input
                        error={kbisError}
                        errorMessage={kbisErrorMessage}
                        value={kbis}
                        callback={setKbis}
                        type={"text"}
                        label={"Numéro Kbis"}
                        placeholder={"123456789"}
                    />
                    <Input
                        error={companyError}
                        errorMessage={companyErrorMessage}
                        value={companyName}
                        callback={setCompanyName}
                        type={"text"}
                        label={"Nom de l'entreprise"}
                        placeholder={"John Doe"}
                    />
                    <Input
                        error={siteError}
                        errorMessage={siteErrorMessage}
                        value={site}
                        callback={setSite}
                        type={"text"}
                        label={"Site internet"}
                        placeholder={"https://www.johndoe.fr"}
                    />
                </div>
            </div>
            <Button
                loading={loading}
                type={"submit"}
                label={"S'inscrire"}
            />
        </form>
    )
}