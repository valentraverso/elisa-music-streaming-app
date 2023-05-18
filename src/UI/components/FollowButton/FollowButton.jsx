import { ButtonFollowStyled } from "../../Styles/components/FollowButtonStyle";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import updatefollows from "../../../api/users/updateFollow";
import updateUnfollow from "../../../api/users/updateUnfollow";
import { useEffect } from "react";
import { setFollows } from "../../../utils/player/user";

export default function FollowButton({ idVisiting }) {

  const { getAccessTokenSilently } = useAuth0();

  const [isFollowing, setIsFollowing] = useState(false)

  const storeInfo = useSelector((state) => state.user);
  const followsUser = storeInfo.data.follows;
  const userId = storeInfo.data._id;

  const userInfo = {
    userId,
    idVisiting
  }

  const searchFollow = followsUser.find(follows => follows === idVisiting)

  useEffect(() => {
    searchFollow ? setIsFollowing(true) : setIsFollowing(false)
  }, [searchFollow])

  const handleFollow = async () => {
    const token = await getAccessTokenSilently();
    switch (isFollowing) {
      case false:
        const follow = await updatefollows(userInfo, token)
        setFollows(follow.data.follows)
        break
      case true:
        const unfollow = await updateUnfollow(userInfo, token)
        setFollows(unfollow.data.follows)
        break;
      default:
        return;
    }

  }

  return (
    isFollowing ?
      <ButtonFollowStyled onClick={handleFollow}>Following</ButtonFollowStyled>
      :
      <ButtonFollowStyled onClick={handleFollow}>Follow</ButtonFollowStyled>
  )

}
