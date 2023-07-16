import UsersListElement from "./UsersListElement";

const UsersList = ({users, selectUser, refreshUsers}) => {
    return (
        <div className="overflow-x-auto mt-5">
            <table className="table">
                <thead>
                <tr>
                    <th className="text-primary">Id</th>
                    <th>Contact</th>
                    <th>Entreprise</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users
                        .sort((userA, userB) => {
                            if (userA.roles.includes('ROLE_ADMIN')) {
                                return -1;
                            }
                            if (userB.roles.includes('ROLE_ADMIN')) {
                                return 1;
                            }

                            if (userA.roles.includes('ROLE_MAINTAINER')) {
                                return -1;
                            }

                            if (userB.roles.includes('ROLE_MAINTAINER')) {
                                return 1;
                            }

                            return userA.id - userB.id;
                        })
                        .map((user) => {
                            return <UsersListElement
                                key={user?.id}
                                user={user} 
                                selectUser={selectUser}
                                refreshUsers={refreshUsers}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;