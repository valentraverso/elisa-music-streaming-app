import styled from "styled-components";
import { ButtonFollowStyled } from "../../components/FollowButtonStyle";
import { ContainerUploadButton } from "./UploadStyle";

export const SectionText = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    font-size: 1.3rem;
    margin-top: 10%;
`
export const ContainerButtonsArtist = styled.div`
    display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 3%;
`

export const ButtonArtist = styled(ButtonFollowStyled)`
    
`

export const ContainerThreeButtons = styled.div`
    display: grid;
grid-template-columns: 1fr 1fr 1fr;
margin-top: 3%;
`

export const ButtonGenre = styled(ButtonFollowStyled)`
    padding: 5px 0px;
`

export const ContainerFinishButton = styled(ContainerUploadButton)`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
`