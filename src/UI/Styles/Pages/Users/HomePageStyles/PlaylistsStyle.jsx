import styled from "styled-components";

export const ContainerPlaylist = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  white-space: nowrap;
  width: 100%;
  background-color: transparent;
  margin: 0 auto; 
  .content::-webkit-scrollbar-x {
  height: 8px;
}

.content::-webkit-scrollbar-thumb {
  background-color: #bbb;
  border-radius: 10px;
}

.content::-webkit-scrollbar-thumb:hover {
  background-color: #999;
}
@media (max-width: 768px){
  overflow-x: scroll;
}
`;

export const PlaylistBackground = styled.div`
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;
  height: 95%;
  background-image: url(${props => props.image});
  background-size: cover;
  filter: blur(10px);
  z-index: -1;
  opacity: 0; /* La imagen de fondo es transparente por defecto */
  transition: opacity 0.3s ease-in-out; /* Agrega transición para suavizar el efecto */
`;

export const Playlist = styled.div`
  position: relative;
  width: 20vh;
  height: 20vh;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover ${PlaylistBackground}{
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
    opacity: 1;
  }

  img {
    width: 20vh;
    height: 150px;
    object-fit: cover;
  }

  h3 {
    position: absolute;
    top: 1%;
    font-size: 1.2rem;
    background-color: transparent;
    margin: 0.5rem;
    color: white;
  }

  p {
    font-size: 1rem;
    background-color: transparent;
    margin: 0.5rem;
    color: #b3b3b3;
  }
  
`;

export const PlaylistTitle = styled.h2`
  padding-top: 1rem;
  color: white;
  font-size: 1rem;
  position: relative;
  top: 0;
 
`;


export const PlaylistImage = styled.img`
  display: block;
  border-radius: 1rem;
  width: 100%;
  height: auto;
  object-fit: cover;
`;
