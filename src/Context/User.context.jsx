import { createContext, useState } from 'react';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
    setCredential: () => null,
    credential: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [credential, setCredential] = useState(null);

    const value = { currentUser, setCurrentUser, setCredential, credential };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
