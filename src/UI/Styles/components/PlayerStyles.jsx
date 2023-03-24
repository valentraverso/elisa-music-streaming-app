import styled from "styled-components";
import { colors, device } from "../config";

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
    @media ${device.desktop}{
        width:100%;
        left:0;
        right: 0;
        bottom:0;
        border-radius: 5px 5px 0 0;
        height:80px;
        grid-template-columns: 40% 60%;
    }
`

export const ContainerInfoSong = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    @media ${device.desktop}{
        grid-template-columns: 10% 90%;
        padding-left: 10%;
    }
`

export const ImgInfoSong = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    margin: auto;
    @media ${device.desktop}{
        width: 70px;
    height: 70px;
    }
`

export const ContainerDataSong = styled.div`
    align-items: self-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${device.desktop}{
        font-size:1.3rem;
    }   
`

export const SpanSongTitle = styled.span`
font-weight: bolder;
`

export const SpanSongArtist = styled.span`

`
