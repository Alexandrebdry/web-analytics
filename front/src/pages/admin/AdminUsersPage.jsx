import { useEffect, useState } from "react";
import { findUsers } from "../../services/UsersService";
import UsersList from "../../components/users/UsersList";
import UsersListFilters from "../../components/users/UsersListFilters";
import UserRolesForm from "../../components/forms/roles/UserRolesForm";

const AdminUsersPage = () => {
    // LIST
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [filters, setFilers] = useState({
        'roles': ['ROLE_ADMIN', 'ROLE_MAINTAINER'],
        'includeVerified': true,
    });

    const getUsers = async () => {
        const response = await findUsers();
        if (response) {
            setUsers(response);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        let newFilteredUsers = users;

        if (!filters.roles.includes('ROLE_ADMIN')) {
            newFilteredUsers = newFilteredUsers.filter((user) => {
                return !user.roles.includes('ROLE_ADMIN');
            });
        }

        if (!filters.roles.includes('ROLE_MAINTAINER')) {
            newFilteredUsers = newFilteredUsers.filter((user) => {
                return !user.roles.includes('ROLE_MAINTAINER');
            });
        }

        if (!filters.includeVerified) {
            newFilteredUsers = newFilteredUsers.filter((user) => {
                return !user.isVerified;
            });
        }

        setFilteredUsers(newFilteredUsers);
    }, [filters, users]);

    // EDIT
    const [selectedUser, setSelectedUser] = useState(null);
    const [modal, setModal] = useState(false);
    const selectUser = (user) => {
        setSelectedUser(user);
        setModal(true);
    }

    const closeModal = () => {
        setSelectedUser(null);
        setModal(false);
    }

    return (
        <>
            <dialog open={modal} id="modal_edit" className="modal text-white">
                <div className={"modal-box text-primary"}>
                    <button onClick={() => setModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <span className="font-bold text-lg">Gestion des rôles</span>
                    <UserRolesForm user={selectedUser} closeModal={closeModal}/>
                </div>

                <form method="dialog" className="modal-backdrop blur">
                    <button onClick={closeModal}>close</button>
                </form>
            </dialog>

            <h1 className="text-2xl">Utilisateurs</h1>

            <UsersListFilters filters={filters} setFilters={setFilers} />

            <UsersList users={filteredUsers} selectUser={selectUser} />
        </>
    );
};

export default AdminUsersPage;