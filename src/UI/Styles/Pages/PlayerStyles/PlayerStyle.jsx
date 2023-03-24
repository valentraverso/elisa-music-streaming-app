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
  top: 10%;
  left: 2%;
  width: 40%;
  height: 55%;
  background-image: url(${props => props.image});
  background-size: 10rem;
  filter: blur(5rem);
  z-index: 0;
`;

export const MainContainer = styled.div`
position: sticky;
background-color: #0A1428;
width: 100%;
top: 90%;
left: 0%;
z-index: 1055;
`

export const SongTitle = styled.h1`
background-color: transparent;
position: absolute;
margin-top: 2%;
left: 10%;
`

export const AudioReproductor = styled(AudioPlayer)`
    position: absolute;
    top: 0;
    background-color: #0A1428;
    display: flex;
    flex-direction: row;

`;



export const RecomendedSongs = styled.table`
  position: relative;
  left: 55%;
  margin-top: 17rem;
  width: 35%;
  border-collapse: collapse;
  overflow-x: scroll;
  overflow-y: scroll;
  
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
    border-radius: 10%;
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
  top: -10%;
  left: 90%;
  width: 10%;
  height: 10%;
  border-radius: 2%;
  border: 2px solid white;
  z-index: 1;
`

export const CurrentTitle = styled.h1`
  background-color: transparent;
  position: absolute;
  top: -10%;
  font-size: 1.4rem;
  left: 15%;

`

export const CurrentContent = styled.div`
  margin-top: -10%;
  width: 150%;
  z-index: 1;
  border-bottom: 1px solid #ccc;

`


export const Td = styled.td``
export const Tr = styled.tr`
`
export const MiniatureSong = styled.img`

`