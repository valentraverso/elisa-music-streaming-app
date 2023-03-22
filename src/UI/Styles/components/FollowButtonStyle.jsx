import styled from "styled-components";
import { device } from "../config";

export const ButtonFollowStyled = styled.button`
    background-opacity: 0;
    padding: 5px 40px;
    border-radius: 5px;
    border: 1px solid #FCFDFC;
    font-size: 1rem;
    margin: 5%;
    @media ${device.desktop}{
        margin:5% 0;
    }
`