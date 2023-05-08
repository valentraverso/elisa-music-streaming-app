import { useQuery } from "react-query";
import { store } from "../utils/redux/store";
import getUserBySub from "../api/users/getBySub";
import { useAuth0 } from "@auth0/auth0-react";
import { ADD_DATA_USER } from "../utils/redux/reducers/user";
import { useNavigate } from "react-router-dom";


export default function ProviderVerifyUser({ children }) {
    const reduxUser = store.getState();
    const { user, getAccessTokenSilently } = useAuth0();

    const navigate = useNavigate();

    const userAction = (user) => {
        switch (user?.status) {
            case true:
                store.dispatch(ADD_DATA_USER(user));
                break;
            default:
                navigate('/register');
                break;
        }
    }

    const { data } = useQuery(['user'], async () => {
        if(window.pathname === "/register"){
            return;
        }

        const token = await getAccessTokenSilently();
        const data = await getUserBySub(user?.sub, token);

        userAction(data);

        return data;
    }, {
        enabled: !reduxUser.status
    })

    return (
        children
    )
}