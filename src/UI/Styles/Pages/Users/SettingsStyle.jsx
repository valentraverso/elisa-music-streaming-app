import styled from "styled-components";
import { colors, device } from "../../config";

export const ContainerSettings = styled.div`
margin: auto;
@media ${device.desktop}{
    width: 50%;
}
`
export const ContainerTitleSettings = styled.div`
cursor: pointer;
display: flex;
justify-content: space-between;
margin: 10px 0;
`

export const SubClassSettingsTitle = styled.h3`
    font-size:1.3rem;
    font-weigth: 800;
    @media ${device.desktop}{
        font-size:1.6rem;
    }
`
export const TitleSetting = styled.span`
@media ${device.desktop}{
    font-size:1.2rem;
}
`
export const LogOutButton = styled.span`
position: absolute;
    bottom: 20px;
    color:${colors.grey};
cursor:pointer;
    @media ${device.desktop}{
        font-size:1.2rem;
    }
    `