import { useAuth0 } from '@auth0/auth0-react';


export function Main() {
    const {
        isAuthenticated,
        logout
    } = useAuth0();

    return (
        <>
            {
                isAuthenticated && (
                    <button onClick={() => {
                        logout({
                            logoutParams: {
                                returnTo: window.location.origin
                            }
                        });
                    }}>Log out</button>
                )
            }
        </>
    )
}
