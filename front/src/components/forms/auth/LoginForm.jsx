import Input from "../../Input";
import {useState} from "react";
import Button from "../../Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import Checkbox from "../../Checkbox.jsx";
import {login} from "../../../services/AuthService.js";
import {TOKEN} from "../../../services/apiConstantes.js";

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(false);

        try  {
            const response = await login(email, password);

            if (response.token) {
                localStorage.setItem(TOKEN, response.token);
                navigate("/");
            }
        } catch(error) {
            setError(true);
            setPassword("") ;
        }

        setLoading(false) ;

    };

    return (
        <form className={"my-4"} onSubmit={handleSubmit}>
            <Input
                value={email}
                callback={setEmail}
                type={"email"}
                label={"Email"}
                placeholder={"john@doe.fr"}
                error={error}
                errorMessage={"L'email est invalide ou n'existe pas"}
            />
            <Input
                value={password}
                callback={setPassword}
                type={"password"}
                label={"Mot de passe"}
                error={error}
                placeholder={"password"}
            />
            <div className={"pt-2 max-w-sm flex flex-col md:flex-row justify-start md:align-center md:justify-between"}>
               <Checkbox label={"Se souvenir de moi"}/>
                <Link to={"/forgot-password"} className={"text-end pt-2 text-sm text-primary"}>Mot de passe oublié ?</Link>
            </div>
            <Button
                type={"submit"}
                label={"Se connecter"}
                disabled={loading}
                loading={loading}
            />
        </form>
    )
}