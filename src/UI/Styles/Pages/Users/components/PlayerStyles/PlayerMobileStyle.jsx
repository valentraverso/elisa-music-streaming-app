import styled from "styled-components";
import AudioPlayer from "react-h5-audio-player";




export const ContainerImage = styled.img`
  width: 50%;
  position: absolute;
  background-color: transparent;
  height: 25%;
  top: 20%;
  left: 30%;
  object-fit: cover;
  z-index: 2;
`;

export const PlaylistBackground = styled.div`
  position: absolute;
  top: 15%;
  left: 32%;
  width: 30%;
  height: 40%;
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
    bottom: 15rem;
    background-color: transparent;
    display: flex;
    flex-direction: row;
`;



export const RecomendedSongs = styled.table`
  position: relative;
  left: 0%;
  margin-top: 3rem;
  width: 100%;
  border-collapse: collapse;
  overflow-x: scroll;
  overflow-y: scroll;
  border-radius: 1rem;
  background-color: rgb(128, 128, 128);
  visibility: ${props => (props.show ? "visible" : "hidden")};
  transform: translateY(${props => (props.show ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1060;
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
    width: 100px;
    height: 100px;
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

export const ShowSongs = styled.div`
  width: 100%;
  background-color: rgba(128, 128, 128, 0.5);
  position: absolute;
  justify-content: center;
  bottom: 0;
  border-radius: 1rem;
  height: 5%;

`;

export const HideSongs = styled.div`
  width: 100%;
  background-color: rgba(128, 128, 128, 0.5);
  position: absolute;
  justify-content: center;
  top: -3rem;
  border-radius: 1rem;
  height: 5%;

`;

export const PlainButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0%;
  left: 35%;
  width: 10rem;
  height: 100%;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  color: inherit;

`;

export const ShowSongsLogo = styled.p`
margin-left: 45%;
font-size: 1.4rem;
`


export const Td = styled.td``
export const Tr = styled.tr`
`
export const MiniatureSong = styled.img`

`