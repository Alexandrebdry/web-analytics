import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../providers/AuthProvider";

const Menu = ({ children }) => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const isAdmin = useCallback(() => {
        return user && user.roles && user.roles.includes('ROLE_ADMIN');
    }, [user]);

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                <div className="flex lg:hidden">
                    <label htmlFor="my-drawer-2" className="btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                            />
                        </svg>
                    </label>
                    <p className="p-3">Analytics</p>
                </div>

                <div className="p-3">
                    {children}
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul
                    className="menu p-4 w-80 h-full bg-base-200 text-base-content"
                >
                    <li className="pb-2">Analytics</li>
                    <li onClick={() => navigate('/')}>
                        <a>Dashboard</a>
                    </li>
                    <li onClick={() => navigate('/tags')}>
                        <a>Tags</a>
                    </li>
                    <li onClick={() => navigate('/conversion-funnels')}>
                        <a>Tunnels de conversion</a>
                    </li>
                    <li onClick={() => navigate('/credentials')}>
                        <a>Identifiants</a>
                    </li>
                    {
                        isAdmin() && <li onClick={() => navigate('/admin/users')}>
                            <a>Utilisateurs</a>
                        </li>
                    }
                    <li onClick={() => navigate('/profile')} className="mt-auto">
                        <a>Profil</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;