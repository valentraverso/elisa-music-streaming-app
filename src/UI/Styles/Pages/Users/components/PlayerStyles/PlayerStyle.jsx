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
export const ContainerImageMobile = styled.img`
  width: 60%;
  position: absolute;
  background-color: transparent;
  height: 40%;
  margin-left: 5rem;
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
export const PlaylistBackgroundMobile = styled.div`
  position: absolute;
  top: 7%;
  left: 23%;
  width: 50%;
  height: 50%;
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
  overflow-x: hidden;
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


export const RecomendedSongsMobile = styled.table`
    position: relative;
  left: 6%;
  margin-top: 10rem;
  width: 88%;
  border-collapse: collapse;
  overflow-x: hidden;
  overflow-y: scroll; 
  justify-content: space-between;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.7);
  padding: 10px;
  margin-bottom: 10px;
  z-index: 2;
  
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

export const TableContainer = styled.div`
  height: 90vh;
  overflow-y: auto;
`

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
export const TrMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.2);
  padding: 10px;
  margin-bottom: 10px;
`;

export const OpenButton = styled.button`
  position: absolute;
  top: 80%;
  left: 45%;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
z-index: 3;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(-45deg)')};
    transform-origin: center center;
  }
`;

export const Td = styled.td``
export const Tr = styled.tr``
export const MiniatureSong = styled.img`

`