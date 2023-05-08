import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProviderVerifyUser from "../context/ProviderVerifyUser";

const PrivateRoutes = ({ children }) => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    return (
        isAuthenticated ?
            <ProviderVerifyUser>
                {children}
            </ProviderVerifyUser>
            :
            navigate('/login')
    )
}

export default PrivateRoutes