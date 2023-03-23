import styled from "styled-components";

export const ContainerPlaylist = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* overflow-x: scroll;
  overflow-y: scroll; */
  white-space: nowrap;
  width: 100%;
  max-width: 1200px; 
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

export const PlaylistBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  filter: blur(10px);
  z-index: -1;
`;