import { useEffect, useState } from 'react';
import { RecomendedSongs, MiniatureSong, Td, Tr, TableContainer } from "../../../../Styles/Pages/Users/components/PlayerStyles/PlayerStyle";
import { useAuth0 } from '@auth0/auth0-react';
import fetchAlbumById from '../../../../../api/albums/getById';
import fetchSongAll from '../../../../../api/song/fetchGetAll';
import fetchManyAlbumById from '../../../../../api/albums/getManyById';
import { useDispatch } from 'react-redux';
import { setPlayer } from '../../../../../utils/player/player';


function RecomendedSongsList({ player }) {
    const [recomendedSongs, setRecomendedSongs] = useState([]);
    const { getAccessTokenSilently } = useAuth0();
    const dispatch = useDispatch();
  
    const handleClickSong = (songId, index) => {
      // Dispatch the setPlayer action
      dispatch(
        setPlayer({
          ...player,
          withSong: true,
          queu: {
            data: recomendedSongs,
            imgAlbum: recomendedSongs[index]?.album?.img?.secure_url || '',
          },
          index: index,
        })
      );
    };
  
    useEffect(() => {
      const fetchSongs = async () => {
        try {
          const songs = await fetchSongAll(await getAccessTokenSilently());
          if (songs.msg) {
            return;
          }
  
          const updatedSongs = await Promise.all(
            songs.map(async (song) => {
              if (song.album && song.album._id) {
                const albumId = song.album._id.toString(); // Convert album ID to string
                const albums = await fetchManyAlbumById([albumId], await getAccessTokenSilently()); // Pass an array of album IDs
                const album = albums[0]; // Extract the first album from the response
                if (album && album.img && album.img.secure_url) {
                  return { ...song, album };
                }
              }
              return song;
            })
          );
  
          setRecomendedSongs(updatedSongs);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchSongs();
    }, [getAccessTokenSilently]);
  
    return (
      <TableContainer>
        <RecomendedSongs>
          {recomendedSongs.map((song, index) => (
            <Tr key={song.id} onClick={() => handleClickSong(song._id, index)}>
              <Td>{song.title}</Td>
              <Td>{song.artist}</Td>
              <Td>
                {song.album?.img?.secure_url ? (
                  <MiniatureSong src={song.album.img.secure_url} />
                ) : (
                  <span>No image available</span>
                )}
              </Td>
            </Tr>
          ))}
        </RecomendedSongs>
      </TableContainer>
    );
  }
  
  export default RecomendedSongsList;