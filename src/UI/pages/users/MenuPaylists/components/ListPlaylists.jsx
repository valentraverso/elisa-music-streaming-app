import { GeneralDiv, PageTitle, DivTypePlaylist,Subtitle, DivPlaylists, ImgPlaylist, DivInfoPlaylist, TitlePlaylist, InfoPlaylist} from "../../../../Styles/Pages/Users/MenuPlaylistsStyle"

export const ListPlaylists = (props) => {
  return (
    <GeneralDiv>
        <DivTypePlaylist>
            <Subtitle>{props.name}</Subtitle>
            <DivPlaylists>
                <ImgPlaylist src="https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5"/>
                <DivInfoPlaylist>
                    <TitlePlaylist>Chill Playlist</TitlePlaylist>
                    <InfoPlaylist>La Rosi, Yno, Marian, Valen, Gomis y mucho más!</InfoPlaylist>
                </DivInfoPlaylist>
            </DivPlaylists>
        </DivTypePlaylist>
    </GeneralDiv>
    
  )
}
