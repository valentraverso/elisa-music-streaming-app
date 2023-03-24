import styled from "styled-components";
import { colors } from "../config";

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
    opacity: 0.98;
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

export const ContainerDataSong = styled.div``

export const SpanSongTitle = styled.span``

export const SpanSongArtist = styled.span``