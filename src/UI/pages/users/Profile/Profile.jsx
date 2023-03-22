import { ContainerProfile, ContainerTopProfile, ImageProfile, H1NameProfile, DivInfoProfile, SpanInfoProfile } from "../../../Styles/Pages/Users/ProfileStyle";
import FollowButton from "../../../components/FollowButton/FollowButton";
import { useAuth0 } from "@auth0/auth0-react";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { links } from "../../../config.links";
import { Link } from "react-router-dom";


export function Profile() {
    const { user: { picture, name } } = useAuth0();

    return (
        <ContainerProfile>
            <TitleCenterPage title='Profile' back={true} />
            <ContainerTopProfile>
                <ImageProfile src={picture} />
                <H1NameProfile>{name}</H1NameProfile>
                <DivInfoProfile>
                    <Link to={links.connections + "/followers"}>
                        <SpanInfoProfile>15 Followers</SpanInfoProfile>
                    </Link>
                    |
                    <Link to={links.connections + "/following"}>
                        <SpanInfoProfile>10 Following</SpanInfoProfile>
                    </Link>
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