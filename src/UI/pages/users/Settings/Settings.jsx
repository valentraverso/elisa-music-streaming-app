import { useAuth0 } from "@auth0/auth0-react";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { links } from "../../../config.links";
import { ContainerSettings, SubClassSettingsTitle, TitleSetting, ContainerTitleSettings, LogOutButton } from "../../../Styles/Pages/Users/SettingsStyle";
import UseWidth from "../../../../utils/hooks/useWidth";

export function Settings() {
    const {logout} = useAuth0();
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
        link={links.library}/>
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
