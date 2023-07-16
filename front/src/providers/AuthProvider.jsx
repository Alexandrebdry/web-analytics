import {createContext, useContext, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {profile} from "../services/AuthService.js";
import {TOKEN} from "../services/apiConstantes.js";


const AuthContext = createContext({});

export default function AuthProvider( {children} ) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem(TOKEN);
        if (!token) {
            if( location.pathname !== '/login' ) {
                if( location.pathname !== '/register' ) {
                    if (location.pathname !== '/forgot-password') {
                    if( location.pathname !== '/reset-password' ) {
                        navigate('/login');
                    }
                    }
                }
            }
        } else {
            profile().then((response) => {
                if(
                    (response && response.statusCode && response.statusCode === 401)
                    || (!response.id)
                ) {
                    localStorage.removeItem(TOKEN);
                    navigate('/login');
                }
                setUser(response);
            }).catch((error) => {
                localStorage.removeItem(TOKEN);
                navigate('/login');
            });
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{user,setUser, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}
