import { ButtonAddSong, ContainerAddSong, ContainerPagePlaylist, ContainerPlaylist } from "../../../../../Styles/Pages/Users/PlaylistStyle";
import { AlbumTitle } from "../AlbumTitle/AlbumTitle";
import { SongsListAlbum } from "../SongsList/SongsListAlbum";

export default function AlbumStructure({ album }) {
    const { img: { secure_url: imgAlbum }, title } = album;

    return (
        <ContainerPagePlaylist>
            <ContainerPlaylist >
                <AlbumTitle img={imgAlbum} playlistName={title} info={""} likes={""} btnLike={true} />
                <SongsListAlbum data={album.songs} imgAlbum={imgAlbum} />
                <ContainerAddSong>
                    <ButtonAddSong>Add new Song</ButtonAddSong>
                </ContainerAddSong>
            </ContainerPlaylist>
        </ ContainerPagePlaylist>
    )
}