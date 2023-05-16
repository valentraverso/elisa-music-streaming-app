import { setPlayer } from "../../../../../utils/player/player";
import { store } from "../../../../../utils/redux/store";
import { ContainerRecentImg, ContainerRecentSearchAll, RecentDescription, RecentImg, Title } from "../../../../Styles/Pages/Users/components/RecentBarStyle"
import { Artist } from "../../../../Styles/Pages/Users/components/TypeOfSearchStyle"
import { Link } from 'react-router-dom';

export default function Results({ songsResults }) {
    const player = store.getState().player;

    return (
        songsResults?.map((song, index) => (
            <ContainerRecentSearchAll
                key={song._id}
                onClick={() => setPlayer({
                    ...player,
                    withSong: true,
                    queu: [song],
                    index: 0
                })}>
                <ContainerRecentImg>
                    <RecentImg src={song.album.img.secure_url} />
                </ContainerRecentImg>
                <RecentDescription>
                    <Title>{song.title}</Title>
                    <Artist>{song.artist}</Artist>
                </RecentDescription>
            </ContainerRecentSearchAll>
        ))
    )
}


