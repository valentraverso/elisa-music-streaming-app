import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import updateLikedSongsPlaylist from "../../../../api/playlists/updateLikedSongs";
import { useAuth0 } from "@auth0/auth0-react";
import updateDislikedSongsPlaylist from "../../../../api/playlists/updateDislikedSongs";
import { setLikePlaylist } from "../../../../utils/player/user";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HeartLikeBorders, HeartLikeFill } from "../../../Styles/components/PlayerStyles";

export default function LikeSong({ id }) {
    const { getAccessTokenSilently } = useAuth0();
    const playlistLikes = useSelector(state => state.user.data.playlists[0].songs);

    console.log("like playlist", playlistLikes)

    const [isLiked, setIsLiked] = useState(false);

    const playlistIncludesLike = playlistLikes.find(song => song._id === id);

    console.log("liked", playlistIncludesLike)

    useEffect(() => {
        playlistIncludesLike ? setIsLiked(true) : setIsLiked(false);
    }, [playlistIncludesLike])


    const handleLike = async (id) => {
        const token = await getAccessTokenSilently();
        const likePlaylist = await updateLikedSongsPlaylist(id, token);

        setLikePlaylist(await likePlaylist.data);

        return;
    }

    const handleDislike = async () => {
        const token = await getAccessTokenSilently();
        const likePlaylist = await updateDislikedSongsPlaylist(id, token);

        setLikePlaylist(await likePlaylist.data);

        return;
    }

    return (
        isLiked ?
            <HeartLikeFill onClick={() => handleDislike(id)} />
            :
            <HeartLikeBorders onClick={() => handleLike(id)} />

    )
}