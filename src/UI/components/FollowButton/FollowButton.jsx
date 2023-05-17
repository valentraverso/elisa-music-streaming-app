import { ButtonFollowStyled } from "../../Styles/components/FollowButtonStyle";
import { useAuth0 } from "@auth0/auth0-react";
import { store } from "../../../utils/redux/store";
import { useSelector } from "react-redux";
import getUserByUsername from "../../../api/users/getUserByUsername";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";




export default function FollowButton({idVisiting, status}) {

  const { getAccessTokenSilently } = useAuth0();

  const [isFollowing, setIsFollowing] = useState(false)

  const storeInfo = useSelector((state) => state.user);
  const { username } = useParams();

  console.log("storeInfo",storeInfo.data.follows)

  const followsUser = storeInfo.data.follows;

  const handleFollow = async () => {
    const token = await getAccessTokenSilently();
    const userId = storeInfo.data._id;
    const data = await getUserByUsername(username, token);
    const visitingId = data.data._id
    const formData = new FormData
    formData.append('userId', userId);
    formData.append('idVisiting', visitingId);
    setIsFollowing(followsUser.includes(visitingId))

    if (isFollowing) {
    try {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/users/updatefollows`, {
          method: "PATCH",
          headers: {
              Authorization: `Bearer ${token}`
          },
          body: formData
      });
      const response = request.json();

      return response;
  } catch (err) {
      return {
          status: false,
          msg: err
      }
  }
}
try {
  const request = await fetch(`${process.env.REACT_APP_API_URL}/users/updateunfollows`, {
      method: "PATCH",
      headers: {
          Authorization: `Bearer ${token}`
      },
      body: formData
  });
  const response = request.json();

  return response;
} catch (err) {
  return {
      status: false,
      msg: err
  }
}



  }
  return (
    isFollowing ? 
    <ButtonFollowStyled onClick={handleFollow} className={status === 'Following' && 'followed'}>Follow</ButtonFollowStyled>
   :
   <ButtonFollowStyled onClick={handleFollow} className={status === 'Following' && 'followed'} >Following</ButtonFollowStyled>
  )
}
