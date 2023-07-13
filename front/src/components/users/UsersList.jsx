import UsersListElement from "./UsersListElement";

const UsersList = ({users, selectUser}) => {
    return (
        <div className="overflow-x-auto">
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
                            return userB.roles.length - userA.roles.length;
                        })
                        .map((user) => {
                            return <UsersListElement user={user} selectUser={selectUser}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;