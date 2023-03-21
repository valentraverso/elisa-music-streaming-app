import styled from "styled-components";

export const ContainerPlaylist = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
`;

export const Playlist = styled.div`
  background-color: #212121;
  border-radius: 5px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  overflow: hidden;
  width: calc(33.333% - 1rem);

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