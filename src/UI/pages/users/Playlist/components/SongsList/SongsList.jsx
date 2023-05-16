import {
    ContainerSong, ContainerSongInfo, ContainerSongsList, ImgSong, NameArtist, SongSettings, TitleSmall
  } from '../../../../../Styles/Pages/Users/PlaylistStyle';
  import { setPlayer } from '../../../../../../utils/player/player';
  import { store } from '../../../../../../utils/redux/store';
  
  export const SongsList = ({data}) => {
    const player = store.getState().player;
    return (
      <ContainerSongsList>
        {
          data?.map((song, index) => {
            return (
              <ContainerSong key={index} onClick={() => setPlayer({
                ...player,
                withSong: true,
                queu: data,
                index: index
              })}>
                <ImgSong src={song.album.img.secure_url} />
                <ContainerSongInfo >
                  <TitleSmall>{song.title}</TitleSmall>
                  <NameArtist>{song.artist}</NameArtist>
                </ContainerSongInfo>
                <SongSettings>...</SongSettings>
              </ContainerSong>
            )
          })
        }
      </ContainerSongsList>
    )
  }