import { useAuth0 } from "@auth0/auth0-react"
import { ButtonArtist, ButtonGenre, ContainerButtonsArtist, InputText, ContainerFinishButton, ContainerInputsText, ContainerThreeButtons, PrivacyPolicySpan, SectionText } from "../../../Styles/Pages/Users/Register";
import { ButtonUploadAlbum, ContainerInputs, ContainerUpload, LabelInputForm } from "../../../Styles/Pages/Users/UploadStyle";
import { useState } from "react";
import postUser from "../../../../api/users/postUser";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const { user, getAccessTokenSilently } = useAuth0();
    const [userData, setUserData] = useState({
        name: user.name || "",
        email: user.email,
        picture: user.picture || "",
        sub: user.sub,
        username:""
    });

    const [isArtist, setIsArtist] = useState(false);

    const handleUsername = (ev) => {
        console.log(ev.target.value);
        setUserData({...userData, username:ev.target.value})
    }
    console.log(userData)

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        const token = await getAccessTokenSilently();

        const createUser = await postUser(userData, token);

        if (!createUser.status) {
            return;
        }

        navigate('/');
    }
    return (
        <ContainerUpload>
            <form onSubmit={handleSubmit}>
                <SectionText>
                    <h1>Hi {user.name.split(" ")[0]}!</h1>
                    <p>Tell us a little about you</p>
                </SectionText>
                <ContainerInputsText>
                    <LabelInputForm>Write your Username</LabelInputForm>
                    <InputText onChange={handleUsername}/>
                </ContainerInputsText>
                <ContainerInputs>
                    <LabelInputForm>Are you an artist?</LabelInputForm>
                    <ContainerButtonsArtist>
                        <ButtonArtist isActive={isArtist && "#3B46F1"} type="button" onClick={() => setIsArtist(true)}>Yes</ButtonArtist>
                        <ButtonArtist isActive={!isArtist && "#3B46F1"} type="button" onClick={() => setIsArtist(false)}>No</ButtonArtist>
                    </ContainerButtonsArtist>
                    <ContainerInputs>
                        <LabelInputForm>Choose your favorites genres</LabelInputForm>
                        <ContainerThreeButtons>
                            <ButtonGenre disabled>Pop</ButtonGenre>
                            <ButtonGenre disabled>HipHop</ButtonGenre>
                            <ButtonGenre disabled>Electro</ButtonGenre>
                            <ButtonGenre disabled>Reggaeton</ButtonGenre>
                            <ButtonGenre disabled>Funk</ButtonGenre>
                            <ButtonGenre disabled>Rock</ButtonGenre>
                        </ContainerThreeButtons>
                    </ContainerInputs>
                </ContainerInputs>
                <PrivacyPolicySpan>By clicking continue you accept our Terms and Conditions.</PrivacyPolicySpan>
                <ContainerFinishButton>
                    <ButtonUploadAlbum type="submit">Finish</ButtonUploadAlbum>
                </ContainerFinishButton>
            </form>
        </ContainerUpload>
    )
}

export { Register }