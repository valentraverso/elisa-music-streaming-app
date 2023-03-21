import styled from "styled-components";
import { colors } from "../../config";

export const ContainerSettings = styled.div`
width: 90%;
margin: auto;
`
export const ContainerTitleSettings = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 0;
`

export const SubClassSettingsTitle = styled.h3`
    font-size:1.3rem;
    font-weigth: 800;
`
export const TitleSetting = styled.span`
`
export const LogOutButton = styled.span`
position: absolute;
    bottom: 90px;
    right: 10%;
    color:${colors.grey}
    `