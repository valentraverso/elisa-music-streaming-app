import { category } from "../category";
import { ContainerBrowserCategory, ContainerTitleCategory, H2TitleCategory, ContainerCategory, CategoryBox, CategoryTitle, ContainerCategorydiv } from "../../../../Styles/Pages/Users/components/CategoryStyle";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetchAllSongs from "../../../../../api/song/fetchGetAll";
import { Skeleton } from "antd";

export default function Category() {
    const { data: songs, isLoading } = useQuery(["allSongs"], async () => {
        const data = await fetchAllSongs();
        return data;
    });

    const limitedSongs = songs?.slice(0, 6);

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
                    limitedSongs &&
                    limitedSongs.map((song) => (
                        <ContainerCategory key={song._id}>
                            <Link to={`/song/${song._id}`}>
                                <CategoryBox src={song.img && song.img.secure_url} />
                                <CategoryTitle>{song.title}</CategoryTitle>
                            </Link>
                        </ContainerCategory>
                    ))
                )}
            </ContainerCategorydiv>
        </ContainerBrowserCategory>
    );
}
