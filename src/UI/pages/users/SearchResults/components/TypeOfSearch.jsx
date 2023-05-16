import { TypeOfSearchDiv, TypeButtons } from "../../../../Styles/Pages/Users/components/TypeOfSearchStyle";
import { useNavigate } from "react-router-dom";

export default function TypeOfSearch({ query }) {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/search/${path}/${query}`);
    };

    return (
        <TypeOfSearchDiv>
            <TypeButtons onClick={() => handleClick("songs")}>Songs</TypeButtons>
            <TypeButtons onClick={() => handleClick("users")}>Users</TypeButtons>
            <TypeButtons onClick={() => handleClick("playlists")}>Playlists</TypeButtons>
            <TypeButtons onClick={() => handleClick("albums")}>Albums</TypeButtons>
        </TypeOfSearchDiv>
    );
}
