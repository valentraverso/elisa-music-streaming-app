import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { ContainerPlayer, ContainerInfoSong, ImgInfoSong, ContainerDataSong, SpanSongTitle, SpanSongArtist } from '../../Styles/components/PlayerStyles';
import UseWidth from '../../../helpers/hooks/useWidth';
import { useSelector } from 'react-redux';
import { setIndex } from '../../../utils/player/player';
import LikeSong from './components/LikeSong';


export const Player = () => {
  const width = UseWidth();
  const { queu, index } = useSelector(state => state.player);

  const queueLength = queu.length - 1;

  const albumImg = queu[index]?.album.img.secure_url || queu.imgAlbum;
  const songTitle = queu[index]?.title || queu.data[index].title;
  const songArtist = queu[index]?.artist || queu.data[index].artist;
  const fileSong = queu[index]?.file.secure_url || queu.data[index].file.secure_url;
  const likeSong = queu[index]?._id || queu.data[index]._id;

  return (
    
    <ContainerPlayer>
      <ContainerInfoSong>
        <ImgInfoSong src={albumImg} />
        <ContainerDataSong>
          <SpanSongTitle>{songTitle}</SpanSongTitle>
          <SpanSongArtist>{songArtist}</SpanSongArtist>
        </ContainerDataSong>
      </ContainerInfoSong>
      {
        width !== 'desktop' ?
          <AudioPlayer
            src={fileSong}
            showDownloadProgress
            showFilledProgress
            layout="horizontal"
            showJumpControls={false}
            autoPlay
            customAdditionalControls={[<LikeSong id={likeSong} />]}
            showSkipControls={true}
            customVolumeControls={[]}
            customProgressBarSection={[]}
            style={{ padding: 0, backgroundColor: 'inherit', boxShadow: "none", width: "98%" }}
            onClickPrevious={() => {
              if (queueLength >= index && index > 0) {
                setIndex(index - 1)
              }
            }}
            onClickNext={() => {
              if (queueLength > index) {
                setIndex(index + 1)
              }
            }}
          />
          :
          <AudioPlayer
            src={fileSong}
            layout="horizontal"
            showSkipControls
            showJumpControls={false}
            showDownloadProgress={false}
            autoPlay
            customAdditionalControls={[<LikeSong id={likeSong} />]}
            customVolumeControls={[]}
            style={{ padding: 0, backgroundColor: 'inherit', boxShadow: "none", width: "98%" }}
            onClickPrevious={() => {
              if (queueLength >= index && index > 0) {
                setIndex(index - 1)
              }
            }}
            onClickNext={() => {
              if (queueLength > index) {
                setIndex(index + 1)
              }
            }}
          />
      }
    </ContainerPlayer>
  )
}
