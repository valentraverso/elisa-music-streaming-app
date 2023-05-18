import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLike } from "../../../../../../Styles/Pages/Users/PlaylistStyle";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setAlbums } from "../../../../../../../utils/player/user";
import updateFollowType from "../../../../../../../api/users/updateFollowType";
import updateUnfollowType from "../../../../../../../api/users/updateUnfollowType";

export default function ButtonFollow({ id }) {
    const { getAccessTokenSilently } = useAuth0();
    const {albums, _id: userId} = useSelector((state) => state.user.data);

    const [isFollow, setIsFollow] = useState(false);

    const searchFollow = albums.find(album => album === id);

    useEffect(() => {
        searchFollow ? setIsFollow(true) : setIsFollow(false)
    }, [searchFollow])

    if(searchFollow?.owner === userId){
        return;
    }

    const data = {
        id,
        type: "albums"
    }

    const handleLike = async () => {
        const token = await getAccessTokenSilently();
        switch (isFollow) {
            case false:
                const follow = await updateFollowType(data, token);
                setAlbums(await follow.data.albums);
                break;
            case true:
                const unfollow = await updateUnfollowType(data, token);
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