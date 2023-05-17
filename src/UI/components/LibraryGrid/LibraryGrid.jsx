import AlbumGrid from "./components/AlbumGrid/AlbumGrid";
import PlaylistGrid from "./components/PlaylistGrid/PlaylistGrid";

export default function LibraryGrid({ data, type }) {
console.log(data)
    return (
        data?.length >= 1 ?
            (
                type === "album" ? (
                    <AlbumGrid data={data} />
                )
                    :
                    type === "playlist" && (
                        <PlaylistGrid data={data} />
                    )
            )
            :
            <>
                <h2>{`We do not find any` + type}</h2>
                <p>It's time to start liking!</p>
            </>
    )

}