import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    return(
        <UserContext.Provider value={{
            user: {
                name:userName,
                email:userEmail
            },
            setUserName,
            setUserEmail
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const user = useContext(UserContext);
    return user;
}