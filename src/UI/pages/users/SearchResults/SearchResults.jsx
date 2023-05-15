import { useParams } from "react-router-dom";
import TypeOfSearch from "./components/TypeOfSearch";
import { useQuery } from "react-query";
import fetchSongByTitle from "../../../../api/song/fetchSongByTitle";
import { useAuth0 } from "@auth0/auth0-react";
import Results from "./components/Results";
import fetchAlbumByTitle from "../../../../api/albums/getAlbumByTitle";
import AlbumResults from "./components/AlbumResults";
import fetchPlaylistByTitle from "../../../../api/playlists/fetchPlaylistByTitle";
import PlaylistResults from "./components/AlbumResults";

export function SearchResults() {
    const { getAccessTokenSilently } = useAuth0()
    const { type, query } = useParams();

    const switchByType = async (token) => {
        switch (type) {
            case "songs":
                return await fetchSongByTitle(query, token);
            case "albums":
                console.log("esta entrando en album")
                return await fetchAlbumByTitle(query, token);
            case "playlist":
                return await fetchPlaylistByTitle(query, token);
        }
    }

    const { data, isLoading } = useQuery(['results', type], async () => {
        const token = await getAccessTokenSilently();
        const searchData = await switchByType(token);
        console.log("query", searchData)
        return searchData;
    });
    console.log("respose", data)
    return (
        <>
            <TypeOfSearch query={query} />
            {isLoading ? (
                <p>Searching...</p>
            ) : (

                data && data.status ? (
                    type === "songs" ? (
                        <Results songsResults={data.data} />
                    ) : type === "albums" ? (
                        <AlbumResults albumResults={data.data} />
                    ) : type === "playlists" ? (
                        <PlaylistResults playlistResults={data.data} />
                    ) : null
                ) : (
                    <p>{data && data.msg}</p>
                )
            )}
        </>
    );
}