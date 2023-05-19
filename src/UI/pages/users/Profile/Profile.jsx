import { ContainerProfile, ContainerTopProfile, ImageProfile, H1NameProfile, DivInfoProfile, SpanInfoProfile, ContainerProfileData, DivConnectionsProfile, DivDiscographyProfile, ContainerPlaylistProfile } from "../../../Styles/Pages/Users/ProfileStyle";
import { useAuth0 } from "@auth0/auth0-react";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { links } from "../../../config.links";
import { Link } from "react-router-dom";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { DivAllPlaylist, Subtitle } from '../../../Styles/Pages/Users/MenuPlaylistsStyle';
import { useSelector } from "react-redux";
import LibraryGrid from "../../../components/LibraryGrid/LibraryGrid";
import { useQuery } from "react-query";
import { Skeleton } from "antd";
import fetchManyAlbumById from "../../../../api/albums/getManyById";

export function Profile() {
    const width = UseWidth();
    const user = useSelector((state) => state.user.data);

    const { getAccessTokenSilently } = useAuth0();

    const { data: albumsData, isLoading } = useQuery(['albums'], async () => {
        const token = await getAccessTokenSilently();
        const data = await fetchManyAlbumById(await user.albums, token);

        return data;
    })

    return (
        <ContainerProfile>
            {
                width !== 'desktop' &&
                <TitleCenterPage title='Profile' back={true} />
            }
            <ContainerTopProfile>
                <ImageProfile src={user?.img.secure_url} />
                <ContainerProfileData>
                    <H1NameProfile>{user?.name}</H1NameProfile>
                    <DivInfoProfile>
                        <DivConnectionsProfile>
                            <Link to={links.connections + "/followers"}>
                                <SpanInfoProfile>{user?.followers.length + " Followers"}</SpanInfoProfile>
                            </Link>
                            |
                            <Link to={links.connections + "/following"}>
                                <SpanInfoProfile>{user?.follows.length + " Following"}</SpanInfoProfile>
                            </Link>
                        </DivConnectionsProfile>
                        <DivDiscographyProfile>
                            <SpanInfoProfile>{user?.playlists.length + " Playlists"}</SpanInfoProfile>
                            |
                            <SpanInfoProfile>{user?.albums.length + " Albums"}</SpanInfoProfile>
                        </DivDiscographyProfile>
                    </DivInfoProfile>
                </ContainerProfileData>
            </ContainerTopProfile>
            <ContainerPlaylistProfile>
                <Subtitle>Playlists</Subtitle>
                <LibraryGrid data={user?.playlists} type={"playlist"} />
            </ContainerPlaylistProfile>
            {
                isLoading ?
                    <Skeleton>
                        <ContainerPlaylistProfile>
                            <Subtitle>Albums</Subtitle>
                            <DivAllPlaylist>
                            </DivAllPlaylist>
                        </ContainerPlaylistProfile>
                    </Skeleton>
                    :
                    (
                        albumsData.status ?
                            <ContainerPlaylistProfile>
                                <Subtitle>Albums</Subtitle>
                                <LibraryGrid data={albumsData?.data} type={"album"} />
                            </ContainerPlaylistProfile>
                            :
                            <p>You don't have albums!</p>
                    )
            }
        </ContainerProfile>
    )
}