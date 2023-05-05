import { useAuth0 } from "@auth0/auth0-react"
import { ButtonArtist, ButtonGenre, ContainerButtonsArtist, ContainerFinishButton, ContainerThreeButtons, PrivacyPolicySpan, SectionText } from "../../../Styles/Pages/Users/Register";
import { ButtonUploadAlbum, ContainerInputs, LabelInputForm } from "../../../Styles/Pages/Users/UploadStyle";
import { useState } from "react";
import postUser from "../../../../utils/api/users/postUser";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const { user, getAccessTokenSilently } = useAuth0();
    const [userData, setUserData] = useState({
        name: user.name || "",
        email: user.email,
        picture: user.picture || "",
        sub: user.sub
    });

    const [isArtist, setIsArtist] = useState(false);

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        const token = await getAccessTokenSilently();

        const createUser = await postUser(userData,token);

        if(!createUser.status){
            return;
        }

        navigate('/');
    }
    return (
        <form onSubmit={handleSubmit}>
            <SectionText>
                <h1>Hi {user.name.split(" ")[0]}!</h1>
                <p>Tell us a little about you</p>
            </SectionText>
            <ContainerInputs>
                <LabelInputForm>Are you an artist?</LabelInputForm>
                <ContainerButtonsArtist>
                    <ButtonArtist isActive={isArtist && "#3B46F1"} type="button" onClick={() => setIsArtist(true)}>Yes</ButtonArtist>
                    <ButtonArtist isActive={!isArtist && "#3B46F1"} type="button" onClick={() => setIsArtist(false)}>No</ButtonArtist>
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
            <PrivacyPolicySpan>By clicking continue you accept our Terms and Conditions.</PrivacyPolicySpan>
            <ContainerFinishButton>
                <ButtonUploadAlbum>Finish</ButtonUploadAlbum>
            </ContainerFinishButton>
        </form>
    )
}

export { Register }