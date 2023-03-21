import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerConnections = styled.div`
width:90%;
margin:auto;`

export const ContainerStatusConnection = styled.div`
margin-top: 5%;
    display: flex;
    justify-content: space-around;`

export const StatusConnectionTitle = styled.span`
   
`

export const LinkTypeStatusConnection = styled(NavLink)`
font-size:1.3rem;
text-decoration:none;
&.active > span{
    font-weight:800;
}
`
