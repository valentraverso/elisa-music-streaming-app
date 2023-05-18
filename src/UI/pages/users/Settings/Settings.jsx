import { useAuth0 } from "@auth0/auth0-react";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { links } from "../../../config.links";
import { ContainerSettings, SubClassSettingsTitle, TitleSetting, ContainerTitleSettings, LogOutButton } from "../../../Styles/Pages/Users/SettingsStyle";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { Link } from "react-router-dom";

export function Settings() {
    const { logout } = useAuth0();
    const width = UseWidth();

    const handleLogOut = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });
    }

    return (
        <ContainerSettings>
            <TitleCenterPage title='Settings'
                back={width !== 'desktop' ? true : false}
                link={links.library} />
            <SubClassSettingsTitle>Account</SubClassSettingsTitle>
            <ContainerTitleSettings>
                <Link to={`/user/edit`}>
                    <TitleSetting>Edit user</TitleSetting>
                </Link>
                <TitleSetting>{">"}</TitleSetting>
            </ContainerTitleSettings>
            <LogOutButton
                onClick={handleLogOut}>Close Session</LogOutButton>
        </ContainerSettings>
    )
}
