import { Link } from "react-router-dom";
import { DivAllPlaylist, DivInfoPlaylist, DivPlaylistsDisplay, DivTypePlaylist, GeneralDiv, ImgPlaylist, InfoPlaylist, TitlePlaylist } from "../../../../Styles/Pages/Users/MenuPlaylistsStyle";

export default function AlbumGrid({ data }) {
    return (
        <GeneralDiv>
            <DivTypePlaylist>
                <DivAllPlaylist>
                    {data &&
                        data.map((playlist) => (
                            <div key={playlist._id}>
                                <Link to={`/playlist/${playlist._id}`}>
                                    <DivPlaylistsDisplay>
                                        <ImgPlaylist src={playlist.img.secure_url} />
                                        <DivInfoPlaylist>
                                            <TitlePlaylist>{playlist.title}</TitlePlaylist>
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