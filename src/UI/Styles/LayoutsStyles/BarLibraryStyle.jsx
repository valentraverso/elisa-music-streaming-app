import styled from 'styled-components';
import { colors } from "../config";
import { FiSettings } from "react-icons/fi"
import { CiSquarePlus } from "react-icons/ci"



export const ContainerIconsMenuLibrary = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    column-gap: 5%;
    padding: 0 5%;
`

export const IconSettings = styled(FiSettings)`
    color: ${colors.white};
    font-size: 1.5rem;
`

export const IconAddAlbum = styled(CiSquarePlus)`
color: ${colors.white};
stroke-width: 0.5px;
font-size: 1.8rem;
`

export const IconAvatar = styled.div`
    background: white;
    height: 45px;
    border-radius: 200px;
    width: 45px;
`

export const UserAvatar = styled.img`
`