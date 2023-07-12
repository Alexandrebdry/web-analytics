import Container from "../../components/Container.jsx";
import LoginForm from "../../components/forms/auth/LoginForm.jsx";
import {Link} from "react-router-dom";

export default function LoginPage() {
    return (
        <Container>
            <div className={"pt-8"}>
                <h1 className={"text-4xl font-bold"}>S'identifier</h1>
                <LoginForm/>
                <Link className={"mt-4"} to={"/register"}>pas de compte ? <span className={"text-error font-bold"}> S'enregistrer</span></Link>
            </div>
        </Container>
    )
}