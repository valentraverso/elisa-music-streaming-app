import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLike } from "../../../../../../Styles/Pages/Users/PlaylistStyle";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import updateFollowAlbum from "../../../../../../../api/albums/updateFollow";
import { setAlbums } from "../../../../../../../utils/player/user";
import updateUnfollowAlbum from "../../../../../../../api/albums/updateUnfollow";

export default function ButtonFollow({ id }) {
    const { getAccessTokenSilently } = useAuth0();
    const albums = useSelector((state) => state.user.data.albums);

    const [isFollow, setIsFollow] = useState(false);

    const searchFollow = albums.find(album => album === id);

    useEffect(() => {
        searchFollow ? setIsFollow(true) : setIsFollow(false)
    }, [searchFollow])

    const handleLike = async () => {
        const token = await getAccessTokenSilently();
        switch (isFollow) {
            case false:
                const follow = await updateFollowAlbum(id, token);
                setAlbums(await follow.data.albums);
                break;
            case true:
                const unfollow = await updateUnfollowAlbum(id, token);
                setAlbums(await unfollow.data.albums);
                break;
            default:
                return;
        }
    }

    return (
        <ButtonLike onClick={handleLike}>
            {
                isFollow ?
                    "Unfollow"
                    :
                    "Follow"
            }
        </ButtonLike>
    )
}