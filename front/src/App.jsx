import AuthProvider from "./providers/AuthProvider.jsx";
import Router from "./router/Router.jsx";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};
function App() {
    return (
        <Wrapper>
            {/* <AuthProvider> */}
            <Router></Router>
            {/* </AuthProvider> */}
        </Wrapper>
    );
}

export default App;
