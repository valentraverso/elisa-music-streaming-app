import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoutes = ({ children }) => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    return (
        isAuthenticated ? children : navigate('/login')
    )
}

export default PrivateRoutes