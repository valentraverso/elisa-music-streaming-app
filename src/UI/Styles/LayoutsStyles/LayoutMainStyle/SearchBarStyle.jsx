import styled from 'styled-components';
import { colors } from "../../config";

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
    padding: 5% 10%;
`;

export const SearchBarIcon = styled.div`
    background-color: ${colors.white};
    position: absolute;
    left: 0;

`

export const SearchBarInput = styled.input`
    background-color: ${colors.white};
    width: 100%;
    border-radius: 5px;
    border: 0;
`; 