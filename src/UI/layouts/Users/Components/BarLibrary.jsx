import { Main } from "../../../Styles/LayoutsStyles/NavbarStyle";
import { IconAddAlbum, IconSettings, IconAvatar, ContainerIconsMenuLibrary, UserAvatar } from "../../../Styles/LayoutsStyles/BarLibraryStyle";
import { Link } from "react-router-dom";
import { links } from "../../../config.links";
import { store } from "../../../../utils/redux/store";

export const BarLibrary = () => {
    const { img: {secure_url: imageUser} } = store.getState().user.data;

    return (
        <Main>
            <ContainerIconsMenuLibrary>
                <Link to={links.settings}>
                    <IconSettings />
                </Link>
                <Link to={links.upload}>
                    <IconAddAlbum />
                </Link>
                <Link to={links.profile}>
                    <IconAvatar>
                        <UserAvatar src={imageUser} />
                    </IconAvatar>
                </Link>
            </ContainerIconsMenuLibrary>
        </Main>
    )
}
