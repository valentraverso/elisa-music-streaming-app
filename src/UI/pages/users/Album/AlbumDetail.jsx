import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import fetchAlbumById from "../../../../api/albums/fetchAlbumById";

export const AlbumDetail = () => {
  const { id } = useParams();
  const { data: album, isLoading } = useQuery(["album", id], () =>
    fetchAlbumById(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{album.title}</h2>
      <p>{album.artist}</p>
      <ul>
        {album.songs.map((song) => (
          <li key={song._id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};


