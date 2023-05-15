import styled from "styled-components";
import { ButtonFollowStyled } from "../../components/FollowButtonStyle";
import { ContainerUploadButton } from "./UploadStyle";
import { colors, device } from "../../config";

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
@media ${device.desktop}{
    gap: 5%;
}
`

export const ButtonArtist = styled(ButtonFollowStyled)`
    background-color: ${props => props.isActive};
`

export const ContainerThreeButtons = styled.div`
    display: grid;
grid-template-columns: 1fr 1fr 1fr;
margin-top: 3%;
`

export const ButtonGenre = styled(ButtonFollowStyled)`
    padding: 5px 0px;
    @media ${device.desktop}{
    margin: 5%;
}
`

export const ContainerFinishButton = styled(ContainerUploadButton)`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    @media ${device.desktop}{
    position: relative;
}
`

export const PrivacyPolicySpan = styled.span`
    color: ${colors.grey};
    font-size: 12px;
`

export const ContainerInputsText = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    margin-top: 10%;
`

export const InputText = styled.input`
    color: black;
    margin-top: 1rem;
`