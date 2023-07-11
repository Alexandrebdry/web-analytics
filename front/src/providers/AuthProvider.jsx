import {createContext, useContext, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {profile} from "../services/AuthService.js";

const AuthContext = createContext({});

export default function AuthProvider( {children} ) {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {

        if( user === null ) {
            const token = localStorage.getItem(import.meta.env.TOKEN_SECRET);
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

                profile().then((response) => {
                    setUser(response.data);
                }) ;
            }
        }
    }, []);


    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}
