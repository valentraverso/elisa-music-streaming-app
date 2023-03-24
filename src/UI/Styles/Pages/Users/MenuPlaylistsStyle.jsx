import styled from "styled-components";
import { colors, device } from "../../config.jsx";

export const GeneralDivMenu = styled.div`
    margin: 0 auto;
    @media ${device.mobile} {
        margin-bottom: 10vh;
    }
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

// Manage change between PLAYLISTS and ALBUMS

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

// Show TyoeOfPlaylists

export const DivTypePlaylist = styled.div`

`

export const Subtitle = styled.h2`

`

// div with all the PLAYLISTS. Exp: MY PLAYLISTS, followed playlists

export const DivAllPlaylist = styled.div`
    @media ${device.desktop} {
        display: flex;
        flex-direction: row;
        gap: 4%;
    }
`
// Inside DivAllPlaylist, General INFO PLAYLIST

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

// Inside DivPlaylists, TITLE AND INFO OF THE PLAYLIST, div, title(p) and info(p)

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


// ADD NEW, div and button

export const DivBtnAddNew=styled.div`
    margin-top: 3%;
    display: flex;
    margin-right: 8%;
    justify-content: end;
`

export const BtnAddNew = styled.button`
    margin-top: 3%;
    border: none;
    font-weight: bold;
    cursor: pointer;
`