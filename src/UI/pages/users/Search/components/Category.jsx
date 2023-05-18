import { category } from "../category";
import { ContainerBrowserCategory, ContainerTitleCategory, H2TitleCategory, ContainerCategory, CategoryBox, CategoryTitle, ContainerCategorydiv } from "../../../../Styles/Pages/Users/components/CategoryStyle";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetchAllSongs from "../../../../../api/song/fetchGetAll";
import { Skeleton } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

export default function Category() {
    const {getAccessTokenSilently}= useAuth0();
    const { data: songs, isLoading } = useQuery(["allSongs"], async () => {
        const token = await getAccessTokenSilently()
        const data = await fetchAllSongs(token);
        return data;
    });


    return (
        <ContainerBrowserCategory>
            <ContainerTitleCategory>
                <H2TitleCategory>New Songs</H2TitleCategory>
            </ContainerTitleCategory>
            <ContainerCategorydiv>
                {isLoading ? (
                    <Skeleton>
                        <ContainerCategory>
                            <CategoryBox />
                            <CategoryTitle />
                        </ContainerCategory>
                    </Skeleton>
                ) : (
                    songs &&
                    songs.data.map((song) => (
                        <ContainerCategory key={song._id}>
                            <Link to={`/song/${song._id}`}>
                                <CategoryBox src={song.album.img.secure_url} />
                                <CategoryTitle>{song.title}</CategoryTitle>
                            </Link>
                        </ContainerCategory>
                    ))
                )}
            </ContainerCategorydiv>
        </ContainerBrowserCategory>
    );
}
