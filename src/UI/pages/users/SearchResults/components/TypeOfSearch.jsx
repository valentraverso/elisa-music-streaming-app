import { TypeOfSearchDiv, Song, Artist, Playlist, Album, ArtistButton } from "../../../../Styles/Pages/Users/components/TypeOfSearchStyle";
import { useNavigate } from "react-router-dom";

export default function TypeOfSearch({ query }) {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/search/${path}/${query}`);
    };

    return (
        <TypeOfSearchDiv>
            <Song onClick={() => handleClick("songs")}>Song</Song>
            <ArtistButton onClick={() => handleClick("users")}>Artist</ArtistButton>
            <Playlist onClick={() => handleClick("playlists")}>Playlist</Playlist>
            <Album onClick={() => handleClick("albums")}>Album</Album>
        </TypeOfSearchDiv>
    );
}
