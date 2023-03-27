import styled from "styled-components";
import { device } from "../../config";

export const ContainerProfile = styled.div``

export const ContainerTopProfile = styled.section`
text-align:center;
@media ${device.desktop}{
    display: flex;
    align-items: center;
    justify-content: center;
    height:200px;
}
`

export const ImageProfile = styled.img`
width: 150px;
height: 150px;
border-radius: 200px;
@media ${device.desktop}{
    width: 200px;
height: 200px;
}
`

export const ContainerProfileData = styled.div`
@media ${device.desktop}{
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 20px;
    justify-content: space-between;
    height: 100%;
}
`

export const H1NameProfile = styled.h1`
font-size: 25px;
    font-weight: 800;
    margin: 10px 0;
@media ${device.desktop}{
    font-size:40px;
}
`

export const DivConnectionsProfile = styled.div`
@media ${device.desktop}{
    display: flex;
    justify-content: space-between;
}`

export const DivDiscographyProfile = styled.div`
@media ${device.desktop}{
    display: flex;
    justify-content: space-between;
}
`

export const DivInfoProfile = styled.div`
@media ${device.desktop}{
    width: 75%;
    font-size:1.2rem;
}
`

export const SpanInfoProfile = styled.span`
margin: 0 10px;
@media ${device.desktop}{
    margin: 0;
}
`

export const ContainerPlaylistProfile = styled.div`
margin: 2% 0;
`