import { Main } from "../../../Styles/LayoutsStyles/NavbarStyle";
import { IconAddAlbum, IconSettings, IconAvatar, ContainerIconsMenuLibrary, UserAvatar } from "../../../Styles/LayoutsStyles/BarLibraryStyle";
import { useAuth0 } from "@auth0/auth0-react";

export const BarLibrary = () => {
    const {user} = useAuth0();
  return (
        <Main>
            <ContainerIconsMenuLibrary>
                <IconSettings/>
                <IconAddAlbum/>
                <IconAvatar>              
                    <UserAvatar src={user?.picture}/>
                </IconAvatar>
            </ContainerIconsMenuLibrary>
        </Main>
  )
}
