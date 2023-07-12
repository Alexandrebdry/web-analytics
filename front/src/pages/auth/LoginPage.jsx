import { useState } from "react";
import Container from "../../components/Container.jsx";
import { login } from "../../services/AuthService.js";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await login(email, password);

        if (response.token) {
            localStorage.setItem("token", response.token);
            navigate("/");
        }
    };

    return (
        <Container>
            <div className={"pt-8"}>
                <h1 className={"text-4xl font-bold"}>Login</h1>

                <form onSubmit={handleSubmit} className={"pt-8"}>
                    <div className={"pb-4"}>
                        <label htmlFor={"email"}>Email</label>
                        <input
                            id={"email"}
                            type={"email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={"pb-4"}>
                        <label htmlFor={"password"}>Password</label>
                        <input
                            id={"password"}
                            type={"password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <button value={"login"} type={"submit"}>
                        Login
                    </button>
                </form>
            </div>
        </Container>
    )
}