import { ContainerProfile, ContainerTopProfile, ImageProfile, H1NameProfile, DivInfoProfile, SpanInfoProfile, ContainerProfileData, DivConnectionsProfile, DivDiscographyProfile, ContainerPlaylistProfile } from "../../../Styles/Pages/Users/ProfileStyle";
import { useAuth0 } from "@auth0/auth0-react";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { links } from "../../../config.links";
import { Link } from "react-router-dom";
import UseWidth from "../../../../helpers/hooks/useWidth";
import FollowButton from "../../../components/FollowButton/FollowButton";
import { DivAllPlaylist, Subtitle } from '../../../Styles/Pages/Users/MenuPlaylistsStyle';
import { PlaylistDisplay } from "../Library/components/PlaylistDisplay";
import getUserById from "../../../../api/users/getById";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

export function VisitProfiles() {

    const width = UseWidth();

    const { id } = useParams();
    const { getAccessTokenSilently } = useAuth0();
  
    const { data: user, isLoading } = useQuery(["albumSong", id], async () => {
      const token = await getAccessTokenSilently();
      const data = await getUserById(id, token);
  
      return data;
    });


    console.log("X");
    
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (

        <ContainerProfile>
            {
                width !== 'desktop' &&
                <TitleCenterPage title='Profile' back={true} />
            }
            <ContainerTopProfile>
                <ImageProfile src={user.data.picture} />
                <ContainerProfileData>
                    <H1NameProfile>{user.data.name}</H1NameProfile>
                    <DivInfoProfile>
                        <DivConnectionsProfile>
                            <Link to={links.connections + "/followers"}>
                                <SpanInfoProfile>{`${user.data.followers.length} Followers`}</SpanInfoProfile>
                            </Link>
                            |
                            <Link to={links.connections + "/following"}>
                                <SpanInfoProfile>{`${user.data.follows.length} Following`}</SpanInfoProfile>
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