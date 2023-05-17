import styled from "styled-components"
import { AiOutlineWarning } from 'react-icons/ai';

export const TypeOfSearchDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    grid-gap:15px;
`
export const SongButton = styled.p`
    display: grid;
    border-radius: 5px;
    border-style: solid;
    background-color: #4a4b4d;
    border-color: #4a4b4d;
    width:58px;
    height:25px;
    justify-content:center;
    align-items: center;
`
export const Artist = styled.p`
    display: grid;
    width:155px;
    height:25px;
    align-items: center;
`
export const User = styled.p`
    display: grid;
    width:145px;
    height:25px;
    justify-content:center;
    align-items: center;
`
export const Playlist = styled.p`
    display: grid;
    width:145px;
    height:25px;
    justify-content:center;
    align-items: center;
`
export const Album = styled.p`
    display: grid;
    width:145px;
    height:25px;
    justify-content:center;
    align-items: center;
`
export const Song = styled.p`
    display: grid;
    width:165px;
    height:25px;
    justify-content:center;
    align-items: center;
`

export const ArtistButton = styled.p`
    display: grid;
    border-radius: 5px;
    border-style: solid;
    background-color: #4a4b4d;
    border-color: #4a4b4d;
    width:58px;
    height:25px;
    justify-content:center;
    align-items: center;
`
export const AlbumButton = styled.p`
    display: grid;
    border-radius: 5px;
    border-style: solid;
    background-color: #4a4b4d;
    border-color: #4a4b4d;
    width:58px;
    height:25px;
    justify-content:center;
    align-items: center;
`
export const PlaylistButton = styled.p`
    display: grid;
    border-radius: 5px;
    border-style: solid;
    background-color: #4a4b4d;
    border-color: #4a4b4d;
    width:58px;
    height:25px;
    justify-content:center;
    align-items: center;
`
export const ErrorMessage = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
    padding: 15px 10px 15px 50px;
    background-repeat: no-repeat;
    background-position: 10px center;
    position: relative;
`;

const ErrorIcon = styled(AiOutlineWarning)`
    margin-right: 10px;
`;