import styled from "styled-components";

export const ContainerAlbum = styled.div`
   position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  white-space: nowrap;
  width: 100%;
  background-color: transparent;
  margin: 1% auto; 
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

export const ContainerAlbumPrincipal = styled.div`
  margin: 20px 0%;
`

export const AlbumImage = styled.img`
  display: block;
  border-radius: 1rem;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const AlbumBackground = styled.div`
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;
  height: 95%;
  background-image: url(${props => props.image});
  background-size: cover;
  filter: blur(10px);
  z-index: -1;
  opacity: 0; 
  transition: opacity 0.3s ease-in-out; 
`;

export const Album = styled.div`
  position: relative;
  width: 20vh;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  
  cursor: pointer;

  &:hover ${AlbumBackground}{
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
    opacity: 1;
  }

  ${AlbumImage} {
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

export const AlbumTitle = styled.h2`
  padding-top: 1rem;
  color: white;
  font-size: 1rem;
  position: relative;
  top: 0;
  width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`;





export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 1rem;
`;

export const Title = styled.h2`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const Item = styled.div`
  position: relative;
  width: 18rem;
  height: 20rem;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ItemBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
`;

export const ItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemTitle = styled.h3`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
`;
