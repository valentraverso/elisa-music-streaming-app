import styled from "styled-components";

export const ContainerRecentSearch = styled.div`
    margin: 5% auto;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const ContainerRecent = styled.div`
    display: grid;
    grid-template-columns: auto 75% 10%;
    align-items: center;
    margin-top: 0.7rem;
`


export const Recent = styled.img`
    width: 40px;
    grid-column: 1;
    border-radius: 5px;
`

export const RecentDescription = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 2;
`


export const Title = styled.p`
    font-weight: bold;
`

export const Artist = styled.p`
    font-size: 14px;
`

export const DeleteRecentSearch = styled.div`
    grid-column: 3;
`

export const DeleteHistory = styled.div`
    
`