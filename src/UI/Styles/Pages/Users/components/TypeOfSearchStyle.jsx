import { AiOutlineInfoCircle } from "react-icons/ai"
import styled from "styled-components"
import { AiOutlineWarning } from 'react-icons/ai';

export const SearchContainer = styled.div`
width: 60%;
    margin: 0 auto;
    `

export const TypeOfSearchDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    grid-gap:15px;
`
export const TypeButtons = styled.p`
    border-radius: 5px;
    border-style: solid;
    background-color: rgb(74, 75, 77);
    border-color: rgb(74, 75, 77);
    width: 70px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
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
    font-weight: bold;
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
    width: 70px;
    height: 30px;
    border-radius: 5px;
    border-style: solid;
    background-color: #4a4b4d;
    border: 0;
    margin: auto;
`

export const ErrorMessage = styled.div`
	margin: auto;
    background-repeat: no-repeat;
    background-position: 10px center;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const InfoIcon = styled(AiOutlineInfoCircle)`
    stroke: #fff;
    width: 3em;
    height: 3em;
    margin-bottom: 20px;
`