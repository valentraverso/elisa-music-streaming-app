import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../config";

export const ContainerConnections = styled.div`
width:90%;
margin:auto;
@media ${device.desktop}{
    width:50%;
}
`

export const ContainerStatusConnection = styled.div`
margin-top: 5%;
    display: flex;
    justify-content: space-around;
    @media ${device.desktop}{
        justify-content: space-between;
    }
`

export const StatusConnectionTitle = styled.span`
`

export const LinkTypeStatusConnection = styled(NavLink)`
font-size:1.3rem;
text-decoration:none;
&.active > span{
    font-weight:800;
}
`
export const ContainerUsers = styled.div``