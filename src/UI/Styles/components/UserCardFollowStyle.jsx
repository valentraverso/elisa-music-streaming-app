import styled from "styled-components";

export const ContainerUserCard = styled.div`
height: 100px;
width: 100%;
display: grid;
grid-template-columns: 20% 50% 30%;
`

export const ContainerUserInfo = styled.div`
width:100%;
height:100%;
display: flex;
align-items: center;
`

export const UserImage = styled.img`
object-fit: contain;
width:60px;
heigth:60px;
border-radius: 200px;
`

export const UserName = styled.span`
 font-size: 1rem;
`