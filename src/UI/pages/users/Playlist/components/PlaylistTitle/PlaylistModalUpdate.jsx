import { Button, ButtonCreate, ButtonDelete, ContainerButtonsCreate, ContainerButtonsDelete, ContainerDelete, ContainerTitle, IconDelete, ModalBackground, ModalContainer, Title } from "../../../../../Styles/components/ModalStyle";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import ReactImageUploading from "react-images-uploading";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerUploaderImage, IconNoUploadImage, InputForm, PlacerDivUpload, PlacerImageUpload, SpanDragorClick } from "../../../../../Styles/Pages/Users/UploadStyle";
import { ButtonArtist, ContainerButtonsArtist } from "../../../../../Styles/Pages/Users/Register";
import updatePlaylistImg from "../../../../../../api/playlists/updatePlaylistImg";
import updatePlaylist from "../../../../../../api/playlists/updatePlaylist";
import updatePlaylistInfo from "../../../../../../api/playlists/updatePlaylistInfo";

export default function PlaylistModalUpdate({ isModalOpen, setIsModalOpen, id, playlistName, img, isPrivate }) {
    const { getAccessTokenSilently } = useAuth0();
    const navigate = useNavigate();

    const [message, setMessage] = useState("");

    const clearMessage = () => {
        setTimeout(() => {
            setMessage("");
        }, 3000);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const [data, setData] = useState({
        title: playlistName,
        picture: "",
        private: isPrivate,
        playlistId: id
    })

    const handleInputChange = (e) => {
        const { value } = e.target;
        setData((prevState) => ({
          ...prevState,
          title: value,
        }));
      };

    const handleImageChange = (imageList) => {
        const [image] = imageList
        setData({
            ...data,
            picture: image
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = await getAccessTokenSilently();
        if (data.picture.imagePlaylist) {
            const updateImage = await updatePlaylistImg(data, token);
            if (await updateImage.status) {
                setMessage("Picture updated successfully!");
                clearMessage();
                setIsModalOpen(false)
            }
            return
        }

        const updateUser = await updatePlaylistInfo(data, token);


        if (await updateUser.status) {
            setIsModalOpen(false)
            return;
        }
        setMessage("Name updated successfully!");
        clearMessage();

    }

    return (
        isModalOpen && (
            <ModalBackground>
                <ModalContainer>
                    <Title>Update Playlist</Title>
                    
                    <form onSubmit={handleSubmit}>
                    <ReactImageUploading
                    onChange={handleImageChange}
                    acceptType={['jpg', 'png', 'webp']}
                    dataURLKey="imagePlaylist"
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
                                            img || data.picture.imagePlaylist ?
                                                <PlacerImageUpload src={data.picture.imagePlaylist ? data.picture.imagePlaylist : img} />
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
                        <ContainerTitle>
                            <InputForm
                                type="text"
                                name="title"
                                placeholder="My playlist"
                                value={data.title}
                                onChange={handleInputChange}
                                required
                                minLength={2}
                                maxLength={20}
                            />
                        </ContainerTitle>
                        <ContainerButtonsArtist>
                            <ButtonArtist
                                isActive={data.private && "#3B46F1"}
                                type="button"
                                onClick={() => setData({ ...data, private: true })}>Private</ButtonArtist>
                            <ButtonArtist
                                isActive={!data.private && "#3B46F1"}
                                type="button"
                                onClick={() => setData({ ...data, private: false })}>Public</ButtonArtist>
                        </ContainerButtonsArtist>
                        <ContainerButtonsCreate>
                            <ButtonCreate type="submit">Update</ButtonCreate>
                            <Button onClick={handleModalClose}>Cancel</Button>
                        </ContainerButtonsCreate>
                    </form>
                </ModalContainer>
            </ModalBackground>
        )
    )
}