import { Main } from "../../../Styles/LayoutsStyles/NavbarStyle";
import { IconAddAlbum, IconSettings, IconAvatar, ContainerIconsMenuLibrary, UserAvatar } from "../../../Styles/LayoutsStyles/BarLibraryStyle";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const BarLibrary = () => {
    const { user: { picture } } = useAuth0();
    return (
        <Main>
            <ContainerIconsMenuLibrary>
                <IconSettings />
                <IconAddAlbum />
                <Link to='/profile'>
                    <IconAvatar>
                        <UserAvatar src={picture} />
                    </IconAvatar>
                </Link>
            </ContainerIconsMenuLibrary>
        </Main>
    )
}
