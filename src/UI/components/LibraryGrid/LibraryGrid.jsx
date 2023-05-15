import AlbumGrid from "./components/AlbumGrid/AlbumGrid";
import PlaylistGrid from "./components/PlaylistGrid/PlaylistGrid";

export default function LibraryGrid({ data, type }) {
    return (
        data.status ? (
            type === "album" ? (
                <AlbumGrid data={data.data} />
            )
                :
                type === "playlist" && (
                    <PlaylistGrid data={data.data} />
                )
        )
            :
            <>
                <h2>{data.msg}</h2>
                <p>It's time to start liking!</p>
            </>
    )

}