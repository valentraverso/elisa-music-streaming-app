import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./player.css"
// import { DivPlaylistsDisplay, ImgPlaylist, DivInfoPlaylist, TitlePlaylist, InfoPlaylist, DivAllPlaylist} from "../../Styles/Pages/Users/MenuPlaylistsStyle"
import { ContainerPlayer, ContainerInfoSong, ImgInfoSong } from '../../Styles/components/PlayerStyles';
import UseWidth from '../../../helpers/hooks/useWidth';

export const Player = () => {

  const width = UseWidth();

  return (
    <ContainerPlayer>
      <ContainerInfoSong>
        <ImgInfoSong src="https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5" />
        <div className='divNameArtist'>
            <p className='pTitle'>Temazo</p>
            <p className='pArtist'>La Rosi</p>
        </div>
      </ContainerInfoSong>

    <AudioPlayer
      src="/assets/songs/ZOO-INTRO.mp3"
      showDownloadProgress={
        width !== "desktop" && false
      }
      showFilledProgress={
        width !== "desktop" && false
      }
      showJumpControls={
        width !== "desktop" && false
      }
      layout="horizontal"
      customAdditionalControls={[]}
      showSkipControls= {true}
      customVolumeControls = {[]}
      customProgressBarSection={[]}
      style={{padding: 0, backgroundColor: "none"}}
    />

    </ContainerPlayer>
  )
}
