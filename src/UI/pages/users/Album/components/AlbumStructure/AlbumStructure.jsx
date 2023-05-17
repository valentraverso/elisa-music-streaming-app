import { ContainerPagePlaylist, ContainerPlaylist } from "../../../../../Styles/Pages/Users/PlaylistStyle";
import { AlbumTitle } from "../AlbumTitle/AlbumTitle";
import { SongsListAlbum } from "../SongsList/SongsListAlbum";

export default function AlbumStructure({ album }) {
    const { img: { secure_url: imgAlbum }, title } = album;

    return (
        <ContainerPagePlaylist>
            <ContainerPlaylist >
                <AlbumTitle id={album._id} img={imgAlbum} playlistName={title} info={""} likes={""} btnLike={true} />
                <SongsListAlbum data={album.songs} imgAlbum={imgAlbum} />
            </ContainerPlaylist>
        </ ContainerPagePlaylist>
    )
}