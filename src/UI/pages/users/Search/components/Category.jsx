import { ContainerBrowserCategory, ContainerTitleCategory, H2TitleCategory, ContainerCategory, CategoryBox, CategoryTitle, ContainerCategorydiv } from "../../../../Styles/Pages/Users/components/CategoryStyle";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetchAllSongs from "../../../../../api/song/fetchGetAll";
import { Skeleton } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { setPlayer } from "../../../../../utils/player/player";
import { store } from "../../../../../utils/redux/store";

export default function Category() {
    const { getAccessTokenSilently } = useAuth0();
    const player = store.getState().player;

    const { data: songs, isLoading } = useQuery(["allSongs"], async () => {
        const token = await getAccessTokenSilently()
        const data = await fetchAllSongs(token);
        return data;
    });

console.log(songs)
    return (
        <ContainerBrowserCategory>
            <ContainerTitleCategory>
                <H2TitleCategory>Newest Songs</H2TitleCategory>
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
                    songs.data.map((song, index) => (
                        <ContainerCategory key={song._id} onClick={() => {
                            setPlayer({
                                ...player,
                                withSong: true,
                                queu: {
                                    ...songs.data,
                                },
                                index
                            })
                        }}>
                            <CategoryBox src={song.album.img.secure_url} />
                            <CategoryTitle>{song.title}</CategoryTitle>
                        </ContainerCategory>
                    ))
                )}
            </ContainerCategorydiv>
        </ContainerBrowserCategory>
    );
}
