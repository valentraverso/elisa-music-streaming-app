import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./player.css"
import { DivPlaylistsDisplay, ImgPlaylist, DivInfoPlaylist, TitlePlaylist, InfoPlaylist, DivAllPlaylist} from "../../Styles/Pages/Users/MenuPlaylistsStyle"


export const Player = () => {
  return (
    <div className='generalDivPlayer'>
      <div className='divImgName'>
        <img src="https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5" className='imgPlayer'/>
        <div className='divNameArtist'>
            <p className='pTitle'>Temazo</p>
            <p className='pArtist'>La Rosi</p>
        </div>
      </div>

    <AudioPlayer
      src="/assets/songs/ZOO-INTRO.mp3"
    />

    </div>
  )
}
