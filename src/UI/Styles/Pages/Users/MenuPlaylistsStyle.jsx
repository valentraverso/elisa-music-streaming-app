import styled from "styled-components";
import { colors, device } from "../../config.jsx";

export const GeneralDivMenu = styled.div`
    margin: 0 auto;
`

export const DivPlaylistsDisplay = styled.div`
    display: grid;
    grid-template-columns: 80px 150px;
    gap: 10px;
    margin-top: 10px;
    @media ${device.desktop} {
        display: grid;
        grid-template-columns: 200px;
    }
`

export const GeneralDiv = styled.div`
    width: 100%;
    margin: 10% auto;
    @media ${device.desktop} {
        margin: 2% auto;
    }
`

export const DivChangePlaylistAlbum = styled.div`
    width: 200px;
    display: grid;
    grid-template-columns: auto auto;
    /* display: flex;
    flex-direction: row;
    gap: 10%; */
`

export const PageTitle = styled.p`
    font-size: 25px;
    font-weight: bold;
    width: 100%;
    margin: 0px auto;

`

export const PageChanger = styled.p`
    font-size: 25px;
    width: 100%;
    margin: 0px auto;
`

export const DivTypePlaylist = styled.div`

`

export const Subtitle = styled.p`

`

export const DivAllPlaylist = styled.div`
    @media ${device.desktop} {
        display: flex;
        flex-direction: row;
        gap: 4%;
    }
`

export const DivPlaylists = styled.div`
    display: grid;
    grid-template-columns: 80px 150px;
    margin-top: 15px;
    gap: 10px;

`

export const ImgPlaylist = styled.img`
    width: 80px;
    border-radius: 5px;
    @media ${device.desktop} {
        width: 170px;
        width: 170px;
    }
`

export const DivInfoPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TitlePlaylist = styled.p`
    font-weight: bold;
`

export const InfoPlaylist = styled.p`
    font-size: 12px;
`