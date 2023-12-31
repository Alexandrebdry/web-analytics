import {useAuthContext} from "../providers/AuthProvider.jsx";
import NotFoundPage from "../pages/error/NotFoundPage.jsx";
import {useNavigate} from "react-router-dom";
import {hasPermissions, PERMISSIONS, useRole} from "./permissions.js";
import {TOKEN} from "../services/apiConstantes.js";

export default function SecuredPage({children, scopes = []}) {
    const { user } = useAuthContext() ;
    const navigate = useNavigate() ;
    if(user && user.roles) {
        const role  = useRole(user) ;

        if(scopes.length > 0 ) {
            let permissions
            if(role) {
                permissions = PERMISSIONS[role] ;

            }

            const isGranted = hasPermissions({permissions, scopes}) ;
            if(!isGranted) {
                return <NotFoundPage/> ;
            }
        }
        return children ;
    }
    else if (localStorage.getItem(TOKEN) === null) {
        navigate('/login') ;
    }
}