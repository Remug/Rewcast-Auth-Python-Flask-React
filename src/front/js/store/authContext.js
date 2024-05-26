import { useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
