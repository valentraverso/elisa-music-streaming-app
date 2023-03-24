import styled from "styled-components";
import { colors } from "../config";
import { device } from "../config";

export const ContainerPlayer = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    border-radius: 10px;
    position: fixed;
    bottom: 70px;
    left: 0px;
    right: 0px;
    width: 90%;
    margin: 0 auto;
    height: 50px;
    align-items: center;
    background-color: ${colors.grey};
    opacity: 0.9;
    @media ${device.desktop} {
        grid-template-columns: 20% auto;
        border-radius: 5px 5px 0 0;
        width: 100%;
        bottom: 0;
    }
`

export const ContainerInfoSong = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
`

export const ImgInfoSong = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    margin: auto;
`

export const ContainerDataSong = styled.div`

`

export const SpanSongTitle = styled.span`
    font-weight: bold;
`

export const SpanSongArtist = styled.span`

`
