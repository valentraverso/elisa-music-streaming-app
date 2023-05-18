import { Artist, ContainerRecentDesktop, ContainerRecentSearchDesktop, H2RecentTitleDesktop, RecentDescriptionDesktop, RecentImgDesktop, Title, } from "../../../../Styles/Pages/Users/components/RecentSearchDesktopStyle"
import Category from "./Category";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetchAllAlbums from "../../../../../api/albums/fetchAllAlbums";
import { useAuth0 } from "@auth0/auth0-react";
import { Skeleton } from "antd";

const RecentSearchDesktop = () => {
    const { getAccessTokenSilently } = useAuth0();

    const { data: albums, isLoading } = useQuery(["allAlbums"], async () => {
        const token = await getAccessTokenSilently();
        const data = await fetchAllAlbums(token);
        return data;
    });

    const limitedAlbums = albums?.slice(0, 6);

    return (
        <div>
            <h2>Recent Search</h2>
            <ContainerRecentSearchDesktop>
                {isLoading ? (
                    <Skeleton>
                        <ContainerRecentDesktop>
                            <RecentDescriptionDesktop>
                                <RecentImgDesktop />
                                <Title />
                            </RecentDescriptionDesktop>
                        </ContainerRecentDesktop>
                    </Skeleton>
                ) : (
                    
                    limitedAlbums &&
                    limitedAlbums.map((album) => (
                        <ContainerRecentDesktop key={album._id}>
                            <Link to={`/album/${album._id}`}>
                                <RecentDescriptionDesktop>
                                    <RecentImgDesktop
                                        src={album.img && album.img.secure_url}
                                        alt={album.title}
                                    />
                                    <Title>{album.title}</Title>
                                </RecentDescriptionDesktop>
                            </Link>
                        </ContainerRecentDesktop>
                    ))
                )}
            </ContainerRecentSearchDesktop>
            <Category/>
        </div>
    );
};

export default RecentSearchDesktop;