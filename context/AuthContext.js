import { useContext, createContext, useState } from "react";
import { Text, SafeAreaView } from "react-native";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [session, setSession] = useState(false);
    const [user, setUser] = useState(false);

    const signin = async () => {};
    const signout = async () => {};

    const contextData = { session, user, signin, signout };
    return (
        <AuthContext.Provider value={contextData}>
            {loading ? (
                <SafeAreaView>
                    <Text>Loading..</Text>
                </SafeAreaView>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { useAuth, AuthContext, AuthProvider };
