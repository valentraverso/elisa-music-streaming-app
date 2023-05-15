import { AiOutlineHeart } from "react-icons/ai";
import updateLikedSongsPlaylist from "../../../../api/playlists/updateLikedSongs";
import { useAuth0 } from "@auth0/auth0-react";

export default function LikeSong({ id }) {
    const { getAccessTokenSilently } = useAuth0();

    const handleLike = async (id) => {
        const token = await getAccessTokenSilently();
        const like = await updateLikedSongsPlaylist(id, token);

        console.log(like)
    }
    return (
        <AiOutlineHeart onClick={() => handleLike(id)} />
    )
}