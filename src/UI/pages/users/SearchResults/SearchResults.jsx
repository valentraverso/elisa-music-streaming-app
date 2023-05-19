import { useParams } from "react-router-dom";
import TypeOfSearch from "./components/TypeOfSearch";
import { useQuery } from "react-query";
import fetchSongByTitle from "../../../../api/song/fetchSongByTitle";
import { useAuth0 } from "@auth0/auth0-react";
import Results from "./components/Results";
import fetchAlbumByTitle from "../../../../api/albums/getAlbumByTitle";
import AlbumResults from "./components/AlbumResults";
import fetchPlaylistByTitle from "../../../../api/playlists/fetchPlaylistByTitle";
import PlaylistResults from "./components/PlaylistResults";
import getUserByName from "../../../../api/users/getByName";
import UserResults from "./components/UserResults";
import { ErrorMessage, InfoIcon, SearchContainer } from "../../../Styles/Pages/Users/components/TypeOfSearchStyle";
import { Skeleton } from "antd";

export function SearchResults() {
    const { getAccessTokenSilently } = useAuth0()
    const { type, query } = useParams();

    const switchByType = async (token) => {
        switch (type) {
            case "songs":
                return await fetchSongByTitle(query, token);
            case "albums":
                return await fetchAlbumByTitle(query, token);
            case "playlists":
                return await fetchPlaylistByTitle(query, token);
            case "users":
                return await getUserByName(query, token);
            default:
                return;
        }
    }

    const { data, isLoading } = useQuery(['results', {type, query}], async () => {
        const token = await getAccessTokenSilently();
        const searchData = await switchByType(token);
        return searchData;
    });
    return (
        <SearchContainer>
            <TypeOfSearch query={query} />
            {
                isLoading ? (
                    <div>
                        <br />
                        <Skeleton />
                    </div>
                ) : (
                    data && data.status ? (
                        type === "songs" ? (
                            <Results songsResults={data.data} />
                        ) : type === "albums" ? (
                            <AlbumResults albumResults={data.data} />
                        ) : type === "playlists" ? (
                            <PlaylistResults playlistResults={data.data} />
                        ) : type === "users" ? (
                            <UserResults userResults={data.data} />
                        ) : null
                    ) : (
                        <ErrorMessage>
                            <InfoIcon />
                            <p>{data && data.msg}</p>
                        </ErrorMessage>
                    )
                )}
        </SearchContainer>
    );
}