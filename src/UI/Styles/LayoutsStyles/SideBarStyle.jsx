import styled from "styled-components";
import { colors, device } from "../config";

export const SideBarContainer = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
    color: ${colors.white};
    @media ${device.desktop} {
        top: 0;
        width: 50%;
        left: 25%;
    }
`

export const SideBarContainerDesktop = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
    color: ${colors.white};
    @media ${device.desktop} {
        top: 0;
        width: 50%;
        left: 25%;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    align-items: center;
    font-size: 2rem;
    margin: 0 auto;
    border-top: 0.5px solid ${colors.white};
    height: 100%;
    @media ${device.desktop}{
        border-top:0;
        border-bottom: 0.5px solid ${colors.white};
    }
`