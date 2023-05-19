import styled from "styled-components";

export const ContainerRecentSearchDesktop = styled.div`
position: relative;
gap: 6%;
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

export const H2RecentTitleDesktop = styled.span`
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 0;
`;

export const ContainerRecentDesktop = styled.div`
    display: flex;
    flex-wrap: wrap; 
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
    width: 120px; 
`;

export const Title = styled.p`
    font-weight: bold;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Artist = styled.p`
    font-size: 14px;
`;
