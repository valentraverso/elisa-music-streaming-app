import styled from "styled-components";

export const ContainerRecentSearchDesktop = styled.div`
  /* Styles for the recent search container */
`;

export const H2RecentTitleDesktop = styled.span`
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 0;
`;

export const ContainerRecentDesktop = styled.div`
    display: flex;
    flex-wrap: wrap; /* Allow albums to wrap to the next row */
    gap: 4%;
    margin-top: 2%;
    margin-bottom: 10%;
`;

export const RecentImgDesktop = styled.img`
    width: 120px;
    height: 120px;
    display: block;
    border-radius: 5px;
`;

export const RecentDescriptionDesktop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 120px; /* Set a fixed width for each album */
`;

export const Title = styled.p`
    font-weight: bold;
`;

export const Artist = styled.p`
    font-size: 14px;
`;
