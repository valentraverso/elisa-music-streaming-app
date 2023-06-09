import { ContainerProfile, ContainerTopProfile, ImageProfile, H1NameProfile, DivInfoProfile, SpanInfoProfile, ContainerProfileData, DivConnectionsProfile, DivDiscographyProfile, ContainerPlaylistProfile } from "../../../Styles/Pages/Users/ProfileStyle";
import { useAuth0 } from "@auth0/auth0-react";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { links } from "../../../config.links";
import { Link } from "react-router-dom";
import UseWidth from "../../../../helpers/hooks/useWidth";
import FollowButton from "../../../components/FollowButton/FollowButton";
import { DivAllPlaylist, Subtitle } from '../../../Styles/Pages/Users/MenuPlaylistsStyle';
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import getUserByUsername from "../../../../api/users/getUserByUsername";
import LibraryGrid from "../../../components/LibraryGrid/LibraryGrid";
import { Skeleton } from "antd";

export function VisitProfiles() {

    const width = UseWidth();
    const { username } = useParams();
    const { getAccessTokenSilently } = useAuth0();


    const { data: user, isLoading } = useQuery(["user", username], async () => {
        const token = await getAccessTokenSilently();
        const data = await getUserByUsername(username, token);
        return data;
    });

    return (
        isLoading ?
            <>
                <Skeleton rows={1} />
                <br />
                <Skeleton.Image />
            </>
            :
            <ContainerProfile>
                {
                    width !== 'desktop' &&
                    <TitleCenterPage title='Profile' back={true} />
                }
                <ContainerTopProfile>
                    <ImageProfile src={user.data.img.secure_url} />
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
                        <FollowButton idVisiting={user.data._id} status='Follow' />
                    </ContainerProfileData>
                </ContainerTopProfile>
                <ContainerPlaylistProfile>
                    <Subtitle>Playlists</Subtitle>
                    <LibraryGrid data={user.data.playlists} type={"playlist"} />
                </ContainerPlaylistProfile>
                <ContainerPlaylistProfile>
                    <Subtitle>Albums</Subtitle>
                    <LibraryGrid data={user.data.albums} type={"album"} />
                </ContainerPlaylistProfile>
            </ContainerProfile>
    )
}