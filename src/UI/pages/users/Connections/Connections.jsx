import React from 'react'
import { useParams } from "react-router-dom";
import UserCardFollow from '../../../components/UserCardFollow/UserCardFollow';
import { ContainerConnections, ContainerUsers } from '../../../Styles/Pages/Users/ConnectionsStyle'
import StatusConnectionMenu from './components/StatusConnectionMenu';

export function Connections() {
    const { typeConnection } = useParams();
    console.log(typeConnection)
    return (
        <ContainerConnections>
            <StatusConnectionMenu />
            <ContainerUsers>
                <UserCardFollow />
            </ContainerUsers>
        </ContainerConnections>
    )
}
