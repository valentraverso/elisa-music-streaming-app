import { TypeOfSearchDiv, ArtistButton, PlaylistButton, AlbumButton, SongButton } from "../../../../Styles/Pages/Users/components/TypeOfSearchStyle";
import { useNavigate } from "react-router-dom";

export default function TypeOfSearch({ query }) {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/search/${path}/${query}`);
    };

    return (
        <TypeOfSearchDiv>
            <SongButton onClick={() => handleClick("songs")}>Song</SongButton>
            <ArtistButton onClick={() => handleClick("users")}>Artist</ArtistButton>
            <PlaylistButton onClick={() => handleClick("playlists")}>Playlist</PlaylistButton>
            <AlbumButton onClick={() => handleClick("albums")}>Album</AlbumButton>
        </TypeOfSearchDiv>
    );
}
