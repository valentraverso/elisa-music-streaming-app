import { useAuth0 } from "@auth0/auth0-react"
import { ButtonArtist, ButtonGenre, ContainerButtonsArtist, ContainerFinishButton, ContainerThreeButtons, SectionText } from "../../../Styles/Pages/Users/Register";
import { ButtonUploadAlbum, ContainerInputs, LabelInputForm } from "../../../Styles/Pages/Users/UploadStyle";

function Register() {
    const { user } = useAuth0();
    return (
        <form>
            <SectionText>
                <h1>Hi {user.name.split(" ")[0]}!</h1>
                <p>Tell us a little about you</p>
            </SectionText>
            <ContainerInputs>
                <LabelInputForm>Are you an artist?</LabelInputForm>
                <ContainerButtonsArtist>
                    <ButtonArtist>Yes</ButtonArtist>
                    <ButtonArtist>No</ButtonArtist>
                </ContainerButtonsArtist>
                <ContainerInputs>
                    <LabelInputForm>Choose your favorites genres</LabelInputForm>
                    <ContainerThreeButtons>
                        <ButtonGenre>Pop</ButtonGenre>
                        <ButtonGenre>HipHop</ButtonGenre>
                        <ButtonGenre>Electro</ButtonGenre>
                        <ButtonGenre>Reggaeton</ButtonGenre>
                        <ButtonGenre>Funk</ButtonGenre>
                        <ButtonGenre>Rock</ButtonGenre>
                    </ContainerThreeButtons>
                </ContainerInputs>
            </ContainerInputs>
            <ContainerFinishButton>
                <ButtonUploadAlbum>Finish</ButtonUploadAlbum>
            </ContainerFinishButton>
        </form>
    )
}

export { Register }