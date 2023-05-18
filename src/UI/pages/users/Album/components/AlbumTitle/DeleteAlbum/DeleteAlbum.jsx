import { RiDeleteBinLine } from "react-icons/ri"
import { Button, ButtonDelete, ContainerButtonsDelete, ModalBackground, ModalContainer, Title } from '../../../../../../Styles/components/ModalStyle';
import { useState } from "react";
import deleteAlbum from "../../../../../../../api/albums/deleteAlbum";
import { useAuth0 } from "@auth0/auth0-react";
import { setAlbums } from "../../../../../../../utils/player/user";
import { useNavigate } from "react-router-dom";
import { links } from "../../../../../../config.links";

export default function DeleteAlbum({ id }) {
    const { getAccessTokenSilently } = useAuth0();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        const token = await getAccessTokenSilently();
        const album = await deleteAlbum(id, token);

        if (album.status) {
            setAlbums(await album.data.albums);

            setIsModalOpen(false);

            navigate(links.library)
            return;
        }
    }

    return (
        <>
            <RiDeleteBinLine onClick={() => setIsModalOpen(true)} />
            {
                isModalOpen && (
                    <ModalBackground>
                        <ModalContainer>
                            <Title>Are you sure you want to delete this album?</Title>
                            <ContainerButtonsDelete>
                                <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
                                <Button onClick={handleModalClose}>Cancel</Button>
                            </ContainerButtonsDelete>
                        </ModalContainer>
                    </ModalBackground>
                )
            }
        </>
    )
}