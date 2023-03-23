import styled from "styled-components";
import AudioPlayer from "react-h5-audio-player";

export const ContainerImage = styled.img`
  width: 30%;
  position: absolute;
  background-color: transparent;
  height: 40%;
  margin-left: 10rem;
  margin-top: 10%;
  object-fit: cover;
  z-index: 2;
`;

export const PlaylistBackground = styled.div`
  position: absolute;
  top: 20%;
  left: 2%;
  width: 40%;
  height: 60%;
  background-image: url(${props => props.image});
  background-size: 100%;
  filter: blur(50px);
  z-index: 0;
`;

export const MainContainer = styled.div`
position: absolute;
background-color: transparent;
width: 70%;
top: 80%;
left: 5%;
`

export const SongTitle = styled.h1`
background-color: transparent;
position: absolute;
left: 10%;
`

export const AudioReproductor = styled(AudioPlayer)`
    position: relative;
    top: 3rem;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    width: 100%;
`



export const RecomendedSongs = styled.table`
    position: relative;
    left: 55%;
    margin-top: 3rem;
    width: 35%;
    border-collapse: collapse;
  
  td {
    padding: 10px;
  }
  
  td:first-child {
    width: 70%;
  }

  td:last-child {
    text-align: center;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }

  @media (max-width: 768px) {
    td:first-child {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      grid-row-gap: 5px;
      text-align: center;
    }

    td:last-child {
      display: none;
    }

    img {
      width: 80%;
      height: auto;
    }
  }
`;

export const CurrentSong = styled.img`
filter: grayscale(100%);
position: absolute;
  top: -20px;
  left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid white;
  z-index: 1;

`


export const Td = styled.td``
export const Tr = styled.tr`
`
export const MiniatureSong = styled.img`

`