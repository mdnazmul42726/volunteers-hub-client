import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <p className="text-3xl pt-20">Loading</p>

    } else if (user) {
        return children
        
    } else {
        return <Navigate to={"/login"} />
    }
};

export default PrivateRoute;