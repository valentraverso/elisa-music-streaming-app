import { useAuth0 } from "@auth0/auth0-react"
import { ButtonArtist, ButtonGenre, ContainerButtonsArtist, ContainerFinishButton, ContainerInputsText, ContainerThreeButtons, ErrorMessage, PrivacyPolicySpan, SectionText } from "../../../Styles/Pages/Users/Register";
import { ButtonUploadAlbum, ContainerInputs, ContainerUpload, InputForm, LabelInputForm } from "../../../Styles/Pages/Users/UploadStyle";
import { useState } from "react";
import postUser from "../../../../api/users/postUser";
import { useNavigate } from "react-router-dom";
import { ADD_DATA_USER } from "../../../../utils/redux/reducers/user";
import { store } from "../../../../utils/redux/store";
import { useQuery } from "react-query";
import getAllGenres from "../../../../api/genre/fetchgetAllGenres";
import { Skeleton } from "antd";

function Register() {
    const navigate = useNavigate();
    const { user, getAccessTokenSilently, isLoading: isLoadingUser } = useAuth0();

    const [error, setError] = useState({ status: "unset", msg: "" })

    const [isArtist, setIsArtist] = useState(false);

    const [userData, setUserData] = useState({
        name: user.name || "",
        email: user.email,
        picture: user.picture || "",
        sub: user.sub,
        username: "",
        genres: []
    });

    const handleUsername = (ev) => {
        if (ev.nativeEvent.data === '-' && userData.username.includes("-")) {
            return;
        }

        const regex = /[^a-z0-9-]/g;

        const username = ev.target.value.replace(regex, "")

        setUserData({
            ...userData,
            username: username
        })
    }

    const { data: genres, isLoading } = useQuery(["genres"], async () => {
        const token = await getAccessTokenSilently();
        const data = await getAllGenres(token);
        return data;
    })

    const handleGenres = (genreId) => {
        const existGenre = userData?.genres.find(genre => genre === genreId);

        if (existGenre) {
            const newGenreArray = userData.genres.filter(genre => genre !== genreId);

            setUserData((prevState) => ({
                ...prevState,
                genres: newGenreArray
            }))

            return;
        }

        setUserData((prevState) => ({
            ...prevState,
            genres: [...prevState.genres, genreId]
        }))
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        isArtist && setUserData({
            ...userData,
            role: 2
        })


        const token = await getAccessTokenSilently();

        const createUser = await postUser(userData, token);

        console.log(createUser)

        if (!createUser.status) {
            setError(createUser);
            return;
        }

        store.dispatch(ADD_DATA_USER(createUser))

        navigate('/');
    }
    return (
        isLoadingUser || isLoading ?
            <Skeleton />
            :
            <ContainerUpload>
                <form onSubmit={handleSubmit}>
                    <SectionText>
                        <h1>Hi {user.name.split(" ")[0]}!</h1>
                        <p>Tell us a little about you</p>
                    </SectionText>
                    <ContainerInputs>
                        <LabelInputForm>Write your Username</LabelInputForm>
                        <InputForm value={userData.username} maxLength={20} onChange={(ev) => handleUsername(ev)} required />
                    </ContainerInputs>
                    <ContainerInputs>
                        <LabelInputForm>Are you an artist?</LabelInputForm>
                        <ContainerButtonsArtist>
                            <ButtonArtist isActive={isArtist && "#3B46F1"} type="button" onClick={() => setIsArtist(true)}>Yes</ButtonArtist>
                            <ButtonArtist isActive={!isArtist && "#3B46F1"} type="button" onClick={() => setIsArtist(false)}>No</ButtonArtist>
                        </ContainerButtonsArtist>
                        <ContainerInputs>
                            <LabelInputForm>Choose your favorites genres</LabelInputForm>
                            <ContainerThreeButtons>
                                {
                                    genres.map((genre) => (
                                        <ButtonGenre isActive={userData.genres.find(find => genre._id === find) && "#3B46F1"} type="button" key={genre._id} onClick={() => handleGenres(genre._id)} >{genre.name}</ButtonGenre>
                                    ))
                                }
                            </ContainerThreeButtons>
                        </ContainerInputs>
                    </ContainerInputs>
                    {
                        !error.status &&
                        <ErrorMessage>{error.msg}</ErrorMessage>
                    }
                    <PrivacyPolicySpan>By clicking continue you accept our Terms and Conditions.</PrivacyPolicySpan>
                    <ContainerFinishButton>
                        <ButtonUploadAlbum type="submit">Finish</ButtonUploadAlbum>
                    </ContainerFinishButton>
                </form>
            </ContainerUpload>
    )
}

export { Register }