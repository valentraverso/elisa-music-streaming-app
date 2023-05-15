import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import { store } from "../utils/redux/store";
import getUserBySub from "../api/users/getBySub";
import { ADD_DATA_USER } from "../utils/redux/reducers/user";

const PrivateRoutes = ({ children }) => {
    const { isLoading: isLoadingAuth, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const navigate = useNavigate();

    const reduxUser = store.getState().user;

    const userAction = async (user) => {
        switch (user?.status) {
            case true:
                store.dispatch(ADD_DATA_USER(user));
                if(window.location.pathname !== "/register"){
                    navigate(window.location.pathname || '/');
                }
                // navigate("/");
                break;
            default:
                navigate('/register');
                break;
        }
    }

    const { isLoading } = useQuery(['user'], async () => {
        const token = await getAccessTokenSilently();

        const data = await getUserBySub(token);

        await userAction(data);

        return data;
    },
    {
        enabled: !reduxUser.status
    })

    return (
        isLoadingAuth || isLoading ?
            <p>Loading...</p>
            :
            (
                isAuthenticated ?
                    children

                    :
                    navigate('/login')
            )
    )
}

export default PrivateRoutes