import { ContainerUserCard, ContainerUserInfo, UserImage, UserName } from "../../Styles/components/UserCardFollowStyle";
import FollowButton from "../FollowButton/FollowButton";


export default function UserCardFollow({avatar = '/assets/images/dif/avatar/adam-sandler.webp', name = 'Elisa User', status = 'Follow'}) {
  return (
    <ContainerUserCard>
        <ContainerUserInfo>
            <UserImage src={avatar}/>
        </ContainerUserInfo>
        <ContainerUserInfo>
          <UserName>{name}</UserName>
        </ContainerUserInfo>
        <ContainerUserInfo>
          <FollowButton status={status} />
        </ContainerUserInfo>
    </ContainerUserCard>
  )
}
