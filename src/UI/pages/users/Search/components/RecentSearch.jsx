import React from "react";
import { ContainerRecentSearch, ContainerRecent, RecentImg, RecentDescription, Title, Artist, DeleteRecentSearch, DeleteHistory, H1RecentTitle, ContainerRecentImg, ContainerDeleteHistory, SpanDeleteRecentSearch, ContainerRecentSearchAll } from "../../../../Styles/Pages/Users/components/RecentBarStyle";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetchAllAlbums from "../../../../../api/albums/fetchAllAlbums";
import { useAuth0 } from "@auth0/auth0-react";
import { Skeleton } from "antd";

const RecentSearch = () => {
    const { getAccessTokenSilently } = useAuth0();

    const { data: albums, isLoading } = useQuery(["allAlbums"], async () => {
        const token = await getAccessTokenSilently();
        const data = await fetchAllAlbums(token);
        return data;
    });

    const limitedAlbums = albums?.slice(0, 6);

    return (
        <ContainerRecentSearch>
            <H1RecentTitle>Recents</H1RecentTitle>
            <ContainerRecent>
                {isLoading ? (
                    <Skeleton>
                        <ContainerRecentSearchAll>
                            <ContainerRecentImg>
                                <RecentImg />
                            </ContainerRecentImg>
                            <RecentDescription>
                                <Title />
                                <Artist />
                            </RecentDescription>
                            <DeleteRecentSearch>
                                <SpanDeleteRecentSearch>X</SpanDeleteRecentSearch>
                            </DeleteRecentSearch>
                        </ContainerRecentSearchAll>
                    </Skeleton>
                ) : (
                    limitedAlbums &&
                    limitedAlbums.map((album) => (
                        <ContainerRecentSearchAll key={album._id}>
                            <ContainerRecentImg>
                                <RecentImg
                                    src={album.img && album.img.secure_url}
                                    alt={album.title}
                                />
                            </ContainerRecentImg>
                            <RecentDescription>
                                <Link to={`/album/${album._id}`}>
                                    <Title>{album.title}</Title>
                                    <Artist>{album.artist}</Artist>
                                </Link>
                            </RecentDescription>
                            <DeleteRecentSearch>
                                <SpanDeleteRecentSearch>X</SpanDeleteRecentSearch>
                            </DeleteRecentSearch>
                        </ContainerRecentSearchAll>
                    ))
                )}
            </ContainerRecent>
            <ContainerDeleteHistory>
                <DeleteHistory>Delete History</DeleteHistory>
            </ContainerDeleteHistory>
        </ContainerRecentSearch>
    );
};

export default RecentSearch;

