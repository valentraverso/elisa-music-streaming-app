import { ButtonFollowStyled } from "../../Styles/components/FollowButtonStyle";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export default function FollowButton({status}) {
  const { id:idVisit } = useParams();
  const { getAccessTokenSilently } = useAuth0();
  const { user } = useAuth0();
  const handleFollow = async () => {
    const token = await getAccessTokenSilently();
    console.log(idVisit);
  }
  return (
    <ButtonFollowStyled onClick={handleFollow} className={status === 'Following' && 'followed'}>{status}</ButtonFollowStyled>
  )
}
