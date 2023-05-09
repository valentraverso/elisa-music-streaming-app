import { useParams } from "react-router-dom";
import TypeOfSearch from "./components/TypeOfSearch";
import { useQuery } from "react-query";
import fetchSongByTitle from "../../../../api/song/fetchSongByTitle";
import { useAuth0 } from "@auth0/auth0-react";
import Results from "./components/Results";

export function SearchResults() {
    const { getAccessTokenSilently } = useAuth0()
    const { type, query } = useParams();

    const switchByType = async (token) => {
        switch (type) {
            case "songs":
                return await fetchSongByTitle(query, token);
        }
    }

    const { data, isLoading } = useQuery(["songsResults"], async () => {
        const token = await getAccessTokenSilently()
        const data = await switchByType(token);
        return data
    })
    console.log(data)
    return (
        <>
            <TypeOfSearch />
            {
                isLoading ?
                    <p>Searching...</p>
                    :
                    <>
                        {
                            data.status ?
                                <Results songsResults={data.data} />
                                :
                                <p>{data.msg}</p>
                        }
                    </>
            }
        </>
    )
}