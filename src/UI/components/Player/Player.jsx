import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { ContainerPlayer, ContainerInfoSong, ImgInfoSong, ContainerDataSong, SpanSongTitle, SpanSongArtist } from '../../Styles/components/PlayerStyles';
import UseWidth from '../../../utils/hooks/useWidth';
import { colors } from '../../Styles/config';
import {AiOutlineHeart} from 'react-icons/ai';
import { useOutletContext } from 'react-router';
// import { playlistSound } from '../../../../public/assets/songs/playlist';
import { useState } from 'react';

export const Player = () => {
  const [playerInPage, setPlayerInPage] = useOutletContext()
  const width = UseWidth();
  // const [songPlayed, setSongPlayed] = useState("")

  return (
    <ContainerPlayer>
      <ContainerInfoSong>
        <ImgInfoSong src={width === 'mobile' ? "https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5" : "https://res.cloudinary.com/dppekhvoo/image/upload/v1679584348/albums/1/41Xg7PsLJIL._UXNaN_FMjpg_QL85__n3j7qv.jpg"} />
        <ContainerDataSong>
          <SpanSongTitle>Temazo</SpanSongTitle>
          <SpanSongArtist>La Rosi</SpanSongArtist>
        </ContainerDataSong>
      </ContainerInfoSong>
      {
        width !== 'desktop' ?
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
            showSkipControls={true}
            customVolumeControls={[]}
            customProgressBarSection={[]}
            style={{ padding: 0, backgroundColor: 'inherit', boxShadow: "none", width: "98%" }}
          />
          :
          <AudioPlayer 
          src="https://res.cloudinary.com/dppekhvoo/video/upload/v1679583767/albums/1/Hey_Mom_wv8nju.mp4"
          layout="horizontal"
          showSkipControls
          showJumpControls={false}
          showDownloadProgress={false}
          customAdditionalControls={[<AiOutlineHeart/>]}
          style={{ padding: 0, backgroundColor: 'inherit', boxShadow: "none", width: "98%" }}
          onClickPrevious={()=>console.log("hola")}
          // onClickNext={()=>handleNext()}
          />
  }
    <span onClick={()=>setPlayerInPage(false)}>x</span>


    </ContainerPlayer>
  )
}
