import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLike } from "../../../../../../Styles/Pages/Users/PlaylistStyle";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setPlaylists } from "../../../../../../../utils/player/user";
import updateFollowType from "../../../../../../../api/users/updateFollowType";
import updateUnfollowType from "../../../../../../../api/users/updateUnfollowType";

export default function ButtonFollow({ id, playlists, userId }) {
    const { getAccessTokenSilently } = useAuth0();

    const [isFollow, setIsFollow] = useState(false);

    const searchFollow = playlists.find(playlist => playlist._id === id);
    
    useEffect(() => {
        searchFollow ? setIsFollow(true) : setIsFollow(false)
    }, [searchFollow])

    if(searchFollow?.owner === userId){
        return;
    }

    const data = {
        id,
        type: "playlists"
    }

    const handleLike = async () => {
        const token = await getAccessTokenSilently();
        switch (isFollow) {
            case false:
                const follow = await updateFollowType(data, token);
                setPlaylists(await follow.data.playlists);
                break;
            case true:
                const unfollow = await updateUnfollowType(data, token);
                setPlaylists(await unfollow.data.playlists);
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