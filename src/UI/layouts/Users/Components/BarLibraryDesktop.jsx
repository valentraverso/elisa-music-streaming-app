import { Main } from "../../../Styles/LayoutsStyles/NavbarStyle";
import { IconAddAlbum, IconSettings, IconAvatar, ContainerIconsMenuLibrary, UserAvatar } from "../../../Styles/LayoutsStyles/BarLibraryDesktopStyle";
import { store } from "../../../../utils/redux/store";

export const BarLibraryDesktop = () => {
    const { img: {secure_url: imageUser} } = store.getState().user.data;
  return (
        <Main>
        <ContainerIconsMenuLibrary>
            <IconSettings/>
            <IconAddAlbum/>
            <IconAvatar>              
                <UserAvatar src={imageUser}/>
            </IconAvatar>
        </ContainerIconsMenuLibrary>
        </Main>
  )
}