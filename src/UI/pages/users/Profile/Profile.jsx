import { ContainerProfile, ContainerTopProfile, ImageProfile, H1NameProfile, DivInfoProfile, SpanInfoProfile, ContainerProfileData } from "../../../Styles/Pages/Users/ProfileStyle";
import FollowButton from "../../../components/FollowButton/FollowButton";
import { useAuth0 } from "@auth0/auth0-react";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { links } from "../../../config.links";
import { Link } from "react-router-dom";
import UseWidth from "../../../../helpers/hooks/useWidth";

export function Profile() {
    const { user: { picture, name } } = useAuth0();
    const width = UseWidth();

    return (
        <ContainerProfile>
            {
                width !== 'desktop' &&
                <TitleCenterPage title='Profile' back={true} />
            }
            <ContainerTopProfile>
                <ImageProfile src={picture} />
                <ContainerProfileData>
                    <H1NameProfile>{name}</H1NameProfile>
                    <DivInfoProfile>
                        <Link to={links.connections + "/followers"}>
                            <SpanInfoProfile>15 Followers</SpanInfoProfile>
                        </Link>
                        |
                        <Link to={links.connections + "/following"}>
                            <SpanInfoProfile>10 Following</SpanInfoProfile>
                        </Link>
                    <br/>
                        <SpanInfoProfile>5 playlists</SpanInfoProfile>
                        |
                        <SpanInfoProfile>1 Album</SpanInfoProfile>
                    </DivInfoProfile>
                    <FollowButton status='Follow' />
                </ContainerProfileData>
            </ContainerTopProfile>
        </ContainerProfile>
    )
}