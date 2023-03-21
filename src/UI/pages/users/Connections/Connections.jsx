import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { ContainerConnections, ContainerStatusConnection, StatusConnectionTitle, LinkTypeStatusConnection } from '../../../Styles/Pages/Users/ConnectionsStyle'

export function Connections() {
    const {typeConnection} = useParams();
    console.log(typeConnection)
    return (
        <ContainerConnections>
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
        </ContainerConnections>
    )
}
