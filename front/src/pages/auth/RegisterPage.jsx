import Container from "../../components/Container.jsx";
import LoginForm from "../../components/forms/auth/LoginForm.jsx";
import {Link} from "react-router-dom";
import RegisterForm from "../../components/forms/auth/RegisterForm.jsx";

export default function RegisterPage() {
    return (
        <Container>
            <div className={"pt-8"}>
                <h1 className={"text-4xl font-bold"}>Nous rejoindre</h1>
                <RegisterForm/>
                <Link className={"mt-4"} to={"/login"}>Déjà un compte ? <span className={"text-error font-bold"}> Se connecter</span></Link>
            </div>
        </Container>
    )
}