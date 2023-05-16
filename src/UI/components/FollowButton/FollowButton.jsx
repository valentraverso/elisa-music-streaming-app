import { ButtonFollowStyled } from "../../Styles/components/FollowButtonStyle";
import { useAuth0 } from "@auth0/auth0-react";
import { store } from "../../../utils/redux/store";
import { useSelector } from "react-redux";
import getUserByUsername from "../../../api/users/getUserByUsername";
import { useParams } from "react-router-dom";




export default function FollowButton({idVisiting, status}) {

  const { getAccessTokenSilently } = useAuth0();

  const storeInfo = useSelector((state) => state.user);
  const { username } = useParams();

  const handleFollow = async () => {
    const token = await getAccessTokenSilently();
    const userId = storeInfo.data[0]._id;
    const data = await getUserByUsername(username, token);
    const visitingId = data.data._id
    const formData = new FormData
    formData.append('userId', userId);
    formData.append('idVisiting', visitingId);
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
  return (
    <ButtonFollowStyled onClick={handleFollow} className={status === 'Following' && 'followed'}>{status}</ButtonFollowStyled>
  )
}
