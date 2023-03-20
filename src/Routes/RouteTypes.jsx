import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoutes = ({ children }) => {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated ? children : children
    )
}

export default PrivateRoutes