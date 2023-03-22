import styled from "styled-components";

export const ContainerPlaylist = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  max-width: 1200px; /* Establecer un ancho máximo para que no se corte la mitad de los playlists */
  margin: 0 auto; /* Centrar el contenedor */
`;


export const Playlist = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.2rem;
    margin: 0.5rem;
    color: white;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem;
    color: #b3b3b3;
  }

`;

export const PlaylistTitle = styled.h2`
  padding-bottom: 3rem;
  padding-top: 1rem;
  color: white;
  font-size: 1rem;
  position: relative;
  margin-left: 20%;
  width: 50%;
  top: 0;
 
`;


export const PlaylistImage = styled.img`

`