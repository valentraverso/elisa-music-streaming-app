import { Link } from "react-router-dom";
import { DivAllPlaylist, DivInfoPlaylist, DivPlaylistsDisplay, DivTypePlaylist, GeneralDiv, ImgPlaylist, InfoPlaylist, TitlePlaylist } from "../../../../Styles/Pages/Users/MenuPlaylistsStyle";

export default function AlbumGrid({ data }) {
    return (
        <GeneralDiv>
            <DivTypePlaylist>
                <DivAllPlaylist>
                    {data &&
                        data.map((album) => (
                            <div key={album._id}>
                                <Link to={`/album/${album._id}`}>
                                    <DivPlaylistsDisplay >
                                        <ImgPlaylist src={album.img.secure_url} />
                                        <DivInfoPlaylist>
                                            <TitlePlaylist>{album.title}</TitlePlaylist>
                                        </DivInfoPlaylist>
                                    </DivPlaylistsDisplay>
                                </Link>
                            </div>
                        ))
                    }
                </DivAllPlaylist>
            </DivTypePlaylist>
        </GeneralDiv>
    )
}