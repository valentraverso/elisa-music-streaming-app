import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { ContainerPlayer, ContainerInfoSong, ImgInfoSong, ContainerDataSong, SpanSongTitle, SpanSongArtist } from '../../Styles/components/PlayerStyles';
import UseWidth from '../../../helpers/hooks/useWidth';
import { useSelector } from 'react-redux';
import { setIndex } from '../../../utils/player/player';
import LikeSong from './components/LikeSong';

export const Player = () => {
  const width = UseWidth();
  const { queu: { data, imgAlbum }, index } = useSelector(state => state.player)
  console.log("player", data[index])
  return (
    <ContainerPlayer>
      <ContainerInfoSong>
        <ImgInfoSong src={imgAlbum} />
        <ContainerDataSong>
          <SpanSongTitle>{data[index].title}</SpanSongTitle>
          <SpanSongArtist>{data[index].artist}</SpanSongArtist>
        </ContainerDataSong>
      </ContainerInfoSong>
      {
        width !== 'desktop' ?
          <AudioPlayer
            src={data[index].file.secure_url}
            showDownloadProgress
            showFilledProgress
            layout="horizontal"
            showJumpControls={false}
            autoPlay
            customAdditionalControls={[<LikeSong id={data[index]._id} />]}
            showSkipControls={true}
            customVolumeControls={[]}
            customProgressBarSection={[]}
            style={{ padding: 0, backgroundColor: 'inherit', boxShadow: "none", width: "98%" }}
            onClickNext={() => {
              if (data.lenght > index) {
                setIndex(index + 1)
              }
            }}
          />
          :
          <AudioPlayer
            src={data[index].file.secure_url}
            layout="horizontal"
            showSkipControls
            showJumpControls={false}
            showDownloadProgress={false}
            autoPlay
            customAdditionalControls={[]}
            customProgressBarSection={[]}
            customVolumeControls={[]}
            style={{ padding: 0, backgroundColor: 'inherit', boxShadow: "none", width: "98%" }}
            onClickPrevious={() => console.log("hola")}
          // onClickNext={()=>handleNext()}
          />
      }
    </ContainerPlayer>
  )
}
