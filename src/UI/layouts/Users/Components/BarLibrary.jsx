import { Main } from "../../../Styles/LayoutsStyles/NavbarStyle"
import { IconAddAlbum, IconSettings, IconAvatar, ContainerIconsMenuLibrary } from "../../../Styles/LayoutsStyles/BarLibraryStyle"

export const BarLibrary = () => {
  return (
        <Main>
            <ContainerIconsMenuLibrary>
                <IconSettings/>
                <IconAddAlbum/>
                <IconAvatar />
            </ContainerIconsMenuLibrary>
        </Main>
  )
}
