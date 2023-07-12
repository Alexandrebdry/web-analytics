const UsersListFilters = ({filters, setFilters}) => {
    const handleRoleFilterChange = (event) => {
        const role = event.target.value;
        const newFilters = {...filters};

        if (event.target.checked) {
            newFilters.roles.push(role);
        } else {
            newFilters.roles = newFilters.roles.filter((r) => {
                return r !== role;
            });
        }

        setFilters(newFilters);
    }

    const handleIncludeVerifiedFilterChange = (event) => {
        const newFilters = {...filters};

        newFilters.includeVerified = event.target.checked;

        setFilters(newFilters);
    }
    
    return (
        <div className="mt-5">
            <div className="card flex flex-row gap-10 p-5 bg-neutral text-neutral-content">
                <div>
                    <h3 className="text-lg">Rôles</h3>

                    <div className="form-control">
                        <label className="label cursor-pointer justify-start ml-2">
                            <input className="checkbox checkbox-primary mr-2" type="checkbox" value="ROLE_ADMIN" id="roleAdmin" onChange={handleRoleFilterChange} checked={filters.roles.includes('ROLE_ADMIN')} />
                            <span>Administrateur</span> 
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer justify-start ml-2">
                            <input className="checkbox checkbox-primary mr-2" type="checkbox" value="ROLE_MAINTAINER" id="roleMaintainer" onChange={handleRoleFilterChange} checked={filters.roles.includes('ROLE_MAINTAINER')} />
                            <span>Modérateur</span> 
                        </label>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg">Vérification</h3>

                    <div className="form-control">
                        <label className="label cursor-pointer justify-start ml-2">
                            <input className="checkbox checkbox-primary mr-2" type="checkbox" value="true" id="isVerifiedTrue" onChange={handleIncludeVerifiedFilterChange} checked={filters.includeVerified === true} />
                            <span>Compte vérifié</span> 
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersListFilters;