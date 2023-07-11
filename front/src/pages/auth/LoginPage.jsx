import Container from "../../components/Container.jsx";

export default function LoginPage() {
    return (
        <Container>
            <div className={"pt-8"}>
                <h1 className={"text-4xl font-bold"}>Login</h1>
                <button value={"login"} type={"submit"}>
                    Login
                </button>
            </div>
        </Container>
    )
}