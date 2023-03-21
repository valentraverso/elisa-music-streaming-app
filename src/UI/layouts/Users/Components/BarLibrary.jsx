import { Main } from "../../../Styles/LayoutsStyles/NavbarStyle";
import { IconAddAlbum, IconSettings, IconAvatar, ContainerIconsMenuLibrary, UserAvatar } from "../../../Styles/LayoutsStyles/BarLibraryStyle";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { links } from "./config.links";

export const BarLibrary = () => {
    const { user } = useAuth0();

    return (
        <Main>
            <ContainerIconsMenuLibrary>
                <IconSettings />
                <IconAddAlbum />
                <Link to={links.profile}>
                    <IconAvatar>
                        <UserAvatar src={user?.picture} />
                    </IconAvatar>
                </Link>
            </ContainerIconsMenuLibrary>
        </Main>
    )
}
