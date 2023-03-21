import { ContainerProfile, ContainerTopProfile, ImageProfile, H1NameProfile, DivInfoProfile, SpanInfoProfile } from "../../../Styles/Pages/Users/ProfileStyle";
import FollowButton from "../../../components/FollowButton/FollowButton";
import { useAuth0 } from "@auth0/auth0-react";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";


export function Profile() {
    const { user: { picture, name } } = useAuth0();

    return (
        <ContainerProfile>
            <TitleCenterPage title='Profile' back={true} />
            <ContainerTopProfile>
                <ImageProfile src={picture} />
                <H1NameProfile>{name}</H1NameProfile>
                <DivInfoProfile>
                    <SpanInfoProfile>15 Followers</SpanInfoProfile>
                    |
                    <SpanInfoProfile>10 Following</SpanInfoProfile>
                </DivInfoProfile>
                <DivInfoProfile>
                    <SpanInfoProfile>5 playlists</SpanInfoProfile>
                    |
                    <SpanInfoProfile>1 Album</SpanInfoProfile>
                </DivInfoProfile>
                <FollowButton status='Follow' />
            </ContainerTopProfile>
        </ContainerProfile>
    )
}