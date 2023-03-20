import { useAuth0 } from '@auth0/auth0-react';


export function Main() {
    const {
        isAuthenticated,
        loginWithRedirect,
        logout
    } = useAuth0();

    console.log(isAuthenticated)

    return (
        <>
            {
                !isAuthenticated &&
                <button onClick={loginWithRedirect}>Log in</button>
            }
            {
                !isAuthenticated && (
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
