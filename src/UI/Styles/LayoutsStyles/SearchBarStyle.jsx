import styled from 'styled-components';
import { colors, device } from "../config";
import { BiSearch } from "react-icons/bi"

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
    padding: 3% 0;
    color: ${colors.black};
    @media ${device.desktop}{
        margin: 0 5%;
        padding: 1% 0;
    }
`;

export const SearchBarIcon = styled.div`
    background-color: ${colors.white};
    position: relative;
    left: 6%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SearchBarInput = styled.input`
    background-color: ${colors.white};
    width: 100%;
    border-radius: 5px;
    border: 0;
    padding: 0 12%;
    font-size: 1.5rem;
    color:${colors.black}
`;

export const IconSearch = styled(BiSearch)`
    color: #000;
    background: #fff;
    font-size: 1.5rem;
    position: absolute;
`