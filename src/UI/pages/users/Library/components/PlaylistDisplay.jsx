import { DivPlaylistsDisplay, ImgPlaylist, DivInfoPlaylist, TitlePlaylist, InfoPlaylist} from "../../../../Styles/Pages/Users/MenuPlaylistsStyle"


export const PlaylistDisplay = (props) => {
  return (
    <DivPlaylistsDisplay>
        <ImgPlaylist src="https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5"/>
        <DivInfoPlaylist>
            <TitlePlaylist>{props.name}</TitlePlaylist>
            <InfoPlaylist>La Rosi, Yno, Marian, Valen, Gomis y mucho más!</InfoPlaylist>
        </DivInfoPlaylist>
    </DivPlaylistsDisplay>
  )
}
