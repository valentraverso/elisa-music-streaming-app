import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { ContainerPlayer, ContainerInfoSong, ImgInfoSong, ContainerDataSong, SpanSongTitle, SpanSongArtist } from '../../Styles/components/PlayerStyles';
import UseWidth from '../../../helpers/hooks/useWidth';
import { AiOutlineHeart } from 'react-icons/ai';
import { store } from '../../../utils/redux/store';
import { useSelector } from 'react-redux';

export const Player = () => {
  const width = UseWidth();
  const {queu, index} = useSelector(state => state.player)

  return (
    <ContainerPlayer>
      <ContainerInfoSong>
        <ImgInfoSong src={width === 'mobile' ? "https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5" : "https://res.cloudinary.com/dppekhvoo/image/upload/v1679584348/albums/1/41Xg7PsLJIL._UXNaN_FMjpg_QL85__n3j7qv.jpg"} />
        <ContainerDataSong>
          <SpanSongTitle>{queu[index].title}</SpanSongTitle>
          <SpanSongArtist>{queu[index].artist}</SpanSongArtist>
        </ContainerDataSong>
      </ContainerInfoSong>
      {
        width !== 'desktop' ?
          <AudioPlayer
            src={index && queu[index].file.secure_url}
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
            autoPlay
            customAdditionalControls={[]}
            showSkipControls={true}
            customVolumeControls={[]}
            customProgressBarSection={[]}
            style={{ padding: 0, backgroundColor: 'inherit', boxShadow: "none", width: "98%" }}
          />
          :
          <AudioPlayer
            src={index && queu[index].file.secure_url}
            layout="horizontal"
            showSkipControls
            showJumpControls={false}
            showDownloadProgress={false}
            autoPlay
            customAdditionalControls={[<AiOutlineHeart />]}
            style={{ padding: 0, backgroundColor: 'inherit', boxShadow: "none", width: "98%" }}
            onClickPrevious={() => console.log("hola")}
          // onClickNext={()=>handleNext()}
          />
      }
    </ContainerPlayer>
  )
}
