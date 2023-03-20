import styled from "styled-components";
import { colors } from "../config";

export const SideBarContainer = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
    color: ${colors.white};
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
`