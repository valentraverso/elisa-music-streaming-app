import styled from "styled-components";
import { colors, fontSize, device } from "../../config.jsx"

export const ContainerPagePlaylist = styled.div` 
    @media ${device.desktop}{
        margin: 0 auto;
        width: 50%;
    }
    @media ${device.mobile}{
        margin: 30px auto;
    }
`

export const ContainerPlaylist = styled.div`
    /* font-size: 2rem; */
    display: flex;
    flex-direction: column;
`

export const ContainerTitlePlaylist = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;
`

export const ImgPlaylist = styled.img`
    width: 100px;
`

export const ContainerPlaylistInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Title = styled.p`
    font-size: 25px;
    font-weight: bold;
    color: ${colors.white};
`

export const Info = styled.p`
    font-size: 15px;
    color: ${colors.white};
`

export const ContainerLikes = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    gap: 9%;
    align-items: center;
`

export const TotalLikes = styled.p`
    font-size: 15px;
    color: ${colors.white};
    font-weight: bold;
`

export const ButtonLike = styled.span`
    width: 100px;
    height: 24px;
    border: 1px ${colors.white} solid;
    border-radius: 5px;
    display:flex;
    justify-content: center;
    align-content: center;
`

export const ContainerSongsList = styled.div`
    margin: 10% auto;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const ContainerSong = styled.div`
    display: grid;
    grid-template-columns: auto 78% auto;
    align-items: center;
    margin-top: 0.7rem;
`


export const ImgSong = styled.img`
    width: 53px;
    grid-column: 1;
    border-radius: 5px;
    cursor: pointer;
`

export const ContainerSongInfo = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 2;
    cursor: pointer;
`


export const TitleSmall = styled.p`
    font-weight: bold;
`

export const NameArtist = styled.p`
    font-size: 10px;
`

export const SongSettings = styled.span`
    border: 0;
    grid-column: 3;
`

export const ContainerAddSong = styled.div`
    width:100%;
`

export const ButtonAddSong = styled.span`
    border-radius: 5px;
    padding: 20px 0;
    float: right;
    font-size: ${fontSize.span};
`