import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import updateBasic from "../../../../api/users/updateBasic";
import { useNavigate } from "react-router-dom";
import { EditForm, ContainerUserInfo, DisplayName, DisplayEmail, EditButton, LabelName, LabelEmail, LabelUsername, DisplayUsername } from "./UserEditStyles"
import { ContainerUploaderImage, ContainerUpload, PlacerDivUpload, PlacerImageUpload, IconNoUploadImage, SpanDragorClick, MessageContainer, MessageText } from "../../../Styles/Pages/Users/UploadStyle";
import ReactImageUploading from "react-images-uploading";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { links } from "../../../config.links";
import { store } from "../../../../utils/redux/store";
import updateImageUser from "../../../../api/users/updateImage";

export function UserEdit() {
    const navigate = useNavigate();
    const width = UseWidth();

    const { getAccessTokenSilently } = useAuth0();
    const user = store.getState().user.data;
    const [userData, setUserData] = useState({
        name: user.name || "",
        picture: user.picture || "",
    });
    const [message, setMessage] = useState("");

    const clearMessage = () => {
        setTimeout(() => {
            setMessage("");
        }, 3000);
    };

    const handleImageChange = (imageList) => {
        const [image] = imageList
        setUserData({
            ...userData,
            picture: image
        })
    };

    const handleNameChange = (event) => {
        const { value } = event.target;
        setUserData({
            ...userData,
            name: value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = await getAccessTokenSilently();

        if (userData.picture.imageUser) {
            const updateImage = await updateImageUser(userData, token);
            if (updateImage.status) {
                setMessage("Picture updated successfully!");
                clearMessage();
            }
            return
        }
        const updateUser = await updateBasic(userData, token);


        if (!updateUser.status) {
            return;
        }
        setMessage("Name updated successfully!");
        clearMessage();
    };


    return (
        <ContainerUpload>
            {
                width !== 'desktop' &&
                <TitleCenterPage title='Edit user' back={true} link={links.settings} />
            }
            <EditForm onSubmit={handleSubmit}>

                <ReactImageUploading
                    onChange={handleImageChange}
                    acceptType={['jpg', 'png', 'webp']}
                    dataURLKey="imageUser"
                >
                    {
                        ({
                            onImageUpload,
                            onImageRemove,
                            errors,
                            dragProps,
                            isDragging }) => {
                            return (
                                <ContainerUploaderImage>
                                    <PlacerDivUpload onClick={onImageUpload} {...dragProps}>
                                        {
                                            user.img.secure_url || userData.picture.imageUser ?
                                                <PlacerImageUpload src={userData.picture.imageUser ? userData.picture.imageUser : user.img.secure_url} />
                                                :
                                                <IconNoUploadImage />
                                        }

                                    </PlacerDivUpload>
                                    <SpanDragorClick>Select Image or drag</SpanDragorClick>
                                </ContainerUploaderImage>
                            )
                        }
                    }
                </ReactImageUploading>
                <ContainerUserInfo>
                    <LabelUsername>Username:</LabelUsername>
                    <DisplayUsername>{user.username}</DisplayUsername>
                    <LabelName>Name:</LabelName>
                    <DisplayName
                        type="text"
                        value={userData.name}
                        onChange={handleNameChange}
                    />
                    <LabelEmail>Email:</LabelEmail>
                    <DisplayEmail>{user.email}</DisplayEmail>
                </ContainerUserInfo>
                <EditButton type="submit">Save</EditButton>
            </EditForm>
            {message && (
                <MessageContainer>
                    <MessageText>{message}</MessageText>
                </MessageContainer>
            )}
        </ContainerUpload>
    );
}