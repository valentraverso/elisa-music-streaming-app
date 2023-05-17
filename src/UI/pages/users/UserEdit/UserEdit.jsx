import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import updateBasic from "../../../../api/users/updateBasic";
import { useNavigate } from "react-router-dom";
import { EditForm, ContainerUserInfo, DisplayName, DisplayEmail, EditButton, LabelName, LabelEmail, LabelUsername, DisplayUsername } from "./UserEditStyles"
import { ContainerUploaderImage, ContainerUpload, PlacerDivUpload, PlacerImageUpload, IconNoUploadImage, SpanDragorClick } from "../../../Styles/Pages/Users/UploadStyle";
import ReactImageUploading from "react-images-uploading";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { links } from "../../../config.links";
import { store } from "../../../../utils/redux/store";

export function UserEdit() {
    const navigate = useNavigate();
    const width = UseWidth();

    const { getAccessTokenSilently } = useAuth0();
    const user = store.getState().user.data;
    const [userData, setUserData] = useState({
        name: user.name || "",
        picture: user.picture || "",
    });
    console.log(userData)
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

        const updateUser = await updateBasic(userId,{
            name: userData.name,
            picture: userData.picture
        }, token);

        console.log("hola", updateUser);

        if (!updateUser.status) {
            return;
        }

        navigate("/");
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
                                            user.picture || userData.picture.imageUser ?
                                                <PlacerImageUpload src={userData.picture.imageUser ? userData.picture.imageUser : user.picture} />
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
        </ContainerUpload>
    );
}