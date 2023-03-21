import React from 'react'
import { ContainerSong, ContainerSongInfo, ContainerSongsList, ImgSong, NameArtist, SongSettings, TitleSmall, ButtonAddSong } from '../../../../../Styles/Pages/Users/PlaylistStyle'
import {songs} from "../../../../../../songs.js"

export const SongsList = () => {
    console.log(songs);
  return (
    <ContainerSongsList>
        
            {songs.map((song)=>{
                return(
                    <ContainerSong>
                    <ImgSong src={song.img}/>
                    <ContainerSongInfo>
                        <TitleSmall>{song.title}</TitleSmall>
                        <NameArtist>{song.artist}</NameArtist>
                    </ContainerSongInfo>
                    <SongSettings>...</SongSettings>
                </ContainerSong>

                )
            })}
    <ButtonAddSong> + Add new Song</ButtonAddSong>
    </ContainerSongsList>
  )
}
