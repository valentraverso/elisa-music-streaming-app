import styled from "styled-components"

export const TypeOfSearchDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    grid-gap:15px;
`
export const SongButton = styled.p`
    border-radius: 5px;
    border-style: solid;
    background-color: #4a4b4d;
    border-color: #4a4b4d;
    width:58px;
    height:25px;
`
export const Artist = styled.p`
    display: grid;
    width:85px;
    height:25px;
    justify-content:center;
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
export const TypeButtons = styled.p`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 30px;
    border-radius: 5px;
    border-style: solid;
    background-color: #4a4b4d;
    border: 0;
    margin: auto;
`

export const ErrorMessage = styled.p`
            border: 1px solid;
			margin: 10px 0px;
			padding: 15px 10px 15px 50px;
			background-repeat: no-repeat;
			background-position: 10px center;
            color: #9F6000;
			background-color: #FEEFB3;
			background-image: url('https://i.imgur.com/Z8q7ww7.png');
`