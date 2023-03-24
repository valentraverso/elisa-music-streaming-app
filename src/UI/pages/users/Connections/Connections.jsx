import React from 'react'
import { useParams } from "react-router-dom";
import UseWidth from '../../../../helpers/hooks/useWidth';
import TitleCenterPage from '../../../components/TitleCenterPage/TitleCenterPage';
import UserCardFollow from '../../../components/UserCardFollow/UserCardFollow';
import { ContainerConnections, ContainerUsers } from '../../../Styles/Pages/Users/ConnectionsStyle'
import StatusConnectionMenu from './components/StatusConnectionMenu';

export function Connections() {
    const { typeConnection } = useParams(); 
    const width = UseWidth();

    return (
        <>
            {
                width !== 'desktop' &&
                <TitleCenterPage title='Connections' back={true} />

            }
            <ContainerConnections>
                <StatusConnectionMenu />
                <ContainerUsers>
                    <UserCardFollow status={typeConnection === 'mutual' || typeConnection === 'following' ? 'Following' : 'Follow'} />
                </ContainerUsers>
            </ContainerConnections>
        </>
    )
}
