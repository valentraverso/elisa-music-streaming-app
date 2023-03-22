import React from 'react'
import { useParams } from "react-router-dom";
import TitleCenterPage from '../../../components/TitleCenterPage/TitleCenterPage';
import UserCardFollow from '../../../components/UserCardFollow/UserCardFollow';
import { ContainerConnections, ContainerUsers } from '../../../Styles/Pages/Users/ConnectionsStyle'
import StatusConnectionMenu from './components/StatusConnectionMenu';

export function Connections() {
    const { typeConnection } = useParams();
    console.log(typeConnection)
    return (
        <>
        <TitleCenterPage title='Connections' back={true} />
        <ContainerConnections>
            <StatusConnectionMenu />
            <ContainerUsers>
                <UserCardFollow />
            </ContainerUsers>
        </ContainerConnections>
        </>
    )
}
