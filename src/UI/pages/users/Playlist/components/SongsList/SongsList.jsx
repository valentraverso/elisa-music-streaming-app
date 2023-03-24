import { ContainerSong, ContainerSongInfo, ContainerSongsList, ImgSong, NameArtist, SongSettings, TitleSmall,
    ButtonAddSong } from '../../../../../Styles/Pages/Users/PlaylistStyle';
import {songs} from "../../../../../../songs.js";
import { useOutletContext } from 'react-router';
import { Player } from '../../../../../components/Player/Player';

export const SongsList = () => {
  const [playerInPage, setPlayerInPage] = useOutletContext()
  return (
    <>
    <ContainerSongsList>
        
            {songs.map((song)=>{
                return(
                    <ContainerSong onClick={()=>setPlayerInPage(true)}>
                    <ImgSong src={song.img}/>
                    <ContainerSongInfo >
                        <TitleSmall>{song.title}</TitleSmall>
                        <NameArtist>{song.artist}</NameArtist>
                    </ContainerSongInfo>
                    <SongSettings>...</SongSettings>
                </ContainerSong>
                )
            })}
    </ContainerSongsList>
    {
    playerInPage &&
    <Player/>
    }
    </>
  )
}
