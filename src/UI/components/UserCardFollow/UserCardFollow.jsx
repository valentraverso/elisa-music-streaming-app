import { ContainerUserCard, ContainerUserImage, UserImage } from "../../Styles/components/UserCardFollowStyle";


export default function UserCardFollow({avatar = '/assets/images/dif/avatar/adam-sandler.webp', name = 'Elisa User', status = false}) {
  return (
    <ContainerUserCard>
        <ContainerUserImage>
            <UserImage src={avatar}/>
        </ContainerUserImage>
    </ContainerUserCard>
  )
}
