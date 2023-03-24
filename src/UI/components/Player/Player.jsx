import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./player.css"
// import { DivPlaylistsDisplay, ImgPlaylist, DivInfoPlaylist, TitlePlaylist, InfoPlaylist, DivAllPlaylist} from "../../Styles/Pages/Users/MenuPlaylistsStyle"
import { ContainerPlayer, ContainerInfoSong, ImgInfoSong, ContainerDataSong, SpanSongTitle, SpanSongArtist} from '../../Styles/components/PlayerStyles';
import UseWidth from '../../../helpers/hooks/useWidth';
import { colors } from '../../Styles/config';

export const Player = () => {

  const width = UseWidth();

  return (
    <ContainerPlayer>
      <ContainerInfoSong>
        <ImgInfoSong src="https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5" />
        <ContainerDataSong>
            <SpanSongTitle>Temazo</SpanSongTitle>
            <br/>
            <SpanSongArtist>La Rosi</SpanSongArtist>
        </ContainerDataSong>
      </ContainerInfoSong>

    {width !== "desktop" ? <AudioPlayer
      src="/assets/songs/ZOO-INTRO.mp3"
      showDownloadProgress={false}
      showFilledProgress={false}
      showJumpControls={false}
      layout="horizontal"
      customAdditionalControls={[]}
      showSkipControls= {true}
      customVolumeControls = {[]}
      customProgressBarSection={[]}
      style={{padding: 0, backgroundColor: colors.grey, boxShadow: "none", width: "98%"}}
      
    /> : 
      <AudioPlayer 
      src="/assets/songs/ZOO-INTRO.mp3"
      showDownloadProgress={false}
      showFilledProgress={false}
      showJumpControls={false}
      layout="horizontal"
      customAdditionalControls={[]}
      showSkipControls= {true}
      customVolumeControls = {[]}
      // customProgressBarSection={[]}
      style={{padding: 0, backgroundColor: colors.grey, boxShadow: "none", width: "98%"}}
      />
      
    }

    </ContainerPlayer>
  )
}
