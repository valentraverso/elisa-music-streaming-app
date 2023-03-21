import { useAuth0 } from "@auth0/auth0-react";
import { ContainerSettings, SubClassSettingsTitle, TitleSetting, ContainerTitleSettings, LogOutButton } from "../../../Styles/Pages/Users/SettingsStyle";

export function Settings() {
    const {logout} = useAuth0();

    const handleLogOut = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });
    }

  return (
    <ContainerSettings>
        <SubClassSettingsTitle>Account</SubClassSettingsTitle>
        <ContainerTitleSettings>
        <TitleSetting>Edit user</TitleSetting>
        <TitleSetting>{">"}</TitleSetting>
        </ContainerTitleSettings>
        <LogOutButton 
        onClick={handleLogOut}>Close Session</LogOutButton>
    </ContainerSettings>
  )
}
