import {ContainerStatusConnection, StatusConnectionTitle, LinkTypeStatusConnection } from '../../../../Styles/Pages/Users/ConnectionsStyle'

export default function StatusConnectionMenu() {
    return (
        <ContainerStatusConnection>
            <LinkTypeStatusConnection to='/connections/mutual'>
                <StatusConnectionTitle>Mutual</StatusConnectionTitle>
            </LinkTypeStatusConnection>
            <LinkTypeStatusConnection to='/connections/followers'>
                <StatusConnectionTitle>Followers</StatusConnectionTitle>
            </LinkTypeStatusConnection>
            <LinkTypeStatusConnection to='/connections/following'>
                <StatusConnectionTitle>Following</StatusConnectionTitle>
            </LinkTypeStatusConnection>
        </ContainerStatusConnection>
    )
}
