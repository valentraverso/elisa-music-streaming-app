import { ContainerProfile, ContainerTopProfile, ImageProfile, H1NameProfile, DivInfoProfile, SpanInfoProfile, ContainerProfileData, DivConnectionsProfile, DivDiscographyProfile, ContainerPlaylistProfile } from "../../../Styles/Pages/Users/ProfileStyle";
import { useAuth0 } from "@auth0/auth0-react";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { links } from "../../../config.links";
import { Link } from "react-router-dom";
import UseWidth from "../../../../helpers/hooks/useWidth";
import FollowButton from "../../../components/FollowButton/FollowButton";
import { DivAllPlaylist, Subtitle } from '../../../Styles/Pages/Users/MenuPlaylistsStyle';
import { PlaylistDisplay } from "../Library/components/PlaylistDisplay";

export function Profile() {
    const { user: { picture, name } } = useAuth0();
    const width = UseWidth();

    return (
        <ContainerProfile>
            {
                width !== 'desktop' &&
                <TitleCenterPage title='Profile' back={true} />
            }
            <ContainerTopProfile>
                <ImageProfile src={picture} />
                <ContainerProfileData>
                    <H1NameProfile>{name}</H1NameProfile>
                    <DivInfoProfile>
                        <DivConnectionsProfile>
                            <Link to={links.connections + "/followers"}>
                                <SpanInfoProfile>15 Followers</SpanInfoProfile>
                            </Link>
                            |
                            <Link to={links.connections + "/following"}>
                                <SpanInfoProfile>10 Following</SpanInfoProfile>
                            </Link>
                        </DivConnectionsProfile>
                        <DivDiscographyProfile>
                            <SpanInfoProfile>5 playlists</SpanInfoProfile>
                            |
                            <SpanInfoProfile>1 Album</SpanInfoProfile>
                        </DivDiscographyProfile>
                    </DivInfoProfile>
                    <FollowButton status='Follow' />
                </ContainerProfileData>
            </ContainerTopProfile>
            <ContainerPlaylistProfile>
                <Subtitle>Playlists</Subtitle>
                <DivAllPlaylist>
                    <Link to="/playlist">
                        <PlaylistDisplay name={"Sad"} />
                    </Link>
                </DivAllPlaylist>
            </ContainerPlaylistProfile>
            <ContainerPlaylistProfile>
                <Subtitle>Albums</Subtitle>
                <DivAllPlaylist>
                    <Link to="/playlist">
                        <PlaylistDisplay name={"Sad"} />
                    </Link>
                </DivAllPlaylist>
            </ContainerPlaylistProfile>
        </ContainerProfile>
    )
}