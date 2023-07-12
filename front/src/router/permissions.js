export const ROLES = {
    ADMIN: 'ROLE_ADMIN',
    USER: 'ROLE_USER',
}

export const SCOPES = {
    ADMIN: 'SCOPE_ADMIN',
    USER: 'SCOPE_USER',
}

export const PERMISSIONS = {
    ROLE_ADMIN: [SCOPES.ADMIN, SCOPES.USER],
    ROLE_USER: [SCOPES.USER],
}

export const useRole = (user) => {
    if(user) {
        if(user.roles.includes(ROLES.ADMIN)) {
            return ROLES.ADMIN;
        }
        if(user.roles.includes(ROLES.USER)) {
            return ROLES.USER;
        }
        return null;
    }
    return null;
}

export const hasPermissions = ({permissions = [], scopes = []}) => {
    const userScopes = {};

    scopes.forEach((scope) => {
        userScopes[scope] = true
    });

    if (!permissions) return null;

    return permissions.some((permission) => userScopes[permission]);

}

