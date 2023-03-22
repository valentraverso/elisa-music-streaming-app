import { ButtonFollowStyled } from "../../Styles/components/FollowButtonStyle";

export default function FollowButton({status}) {
  return (
    <ButtonFollowStyled className={status === 'Following' && 'followed'}>{status}</ButtonFollowStyled>
  )
}
