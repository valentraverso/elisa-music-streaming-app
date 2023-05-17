import { ContainerProfile, ContainerTopProfile, ImageProfile, H1NameProfile, DivInfoProfile, SpanInfoProfile, ContainerProfileData, DivConnectionsProfile, DivDiscographyProfile, ContainerPlaylistProfile } from "../../../Styles/Pages/Users/ProfileStyle";
import { useAuth0 } from "@auth0/auth0-react";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { links } from "../../../config.links";
import { Link } from "react-router-dom";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { DivAllPlaylist, Subtitle } from '../../../Styles/Pages/Users/MenuPlaylistsStyle';
import { useSelector } from "react-redux";

export function Profile() {
    const { user: { picture, name } } = useAuth0();
    const width = UseWidth();
    const storeInfo = useSelector((state) => state.user.data);

    return (
        <ContainerProfile>
            {
                width !== 'desktop' &&
                <TitleCenterPage title='Profile' back={true} />
            }
            <ContainerTopProfile>
                <ImageProfile src={storeInfo.img.secure_url} />
                <ContainerProfileData>
                    <H1NameProfile>{storeInfo.name}</H1NameProfile>
                    <DivInfoProfile>
                        <DivConnectionsProfile>
                            <Link to={links.connections + "/followers"}>
                                <SpanInfoProfile>{storeInfo.followers.length}</SpanInfoProfile>
                            </Link>
                            |
                            <Link to={links.connections + "/following"}>
                                <SpanInfoProfile>{storeInfo.follows.length}</SpanInfoProfile>
                            </Link>
                        </DivConnectionsProfile>
                        <DivDiscographyProfile>
                            <SpanInfoProfile>5 playlists</SpanInfoProfile>
                            |
                            <SpanInfoProfile>1 Album</SpanInfoProfile>
                        </DivDiscographyProfile>
                    </DivInfoProfile>
                </ContainerProfileData>
            </ContainerTopProfile>
            <ContainerPlaylistProfile>
                <Subtitle>Playlists</Subtitle>
                <DivAllPlaylist>

                </DivAllPlaylist>
            </ContainerPlaylistProfile>
            <ContainerPlaylistProfile>
                <Subtitle>Albums</Subtitle>
                <DivAllPlaylist>

                </DivAllPlaylist>
            </ContainerPlaylistProfile>
        </ContainerProfile>
    )
}