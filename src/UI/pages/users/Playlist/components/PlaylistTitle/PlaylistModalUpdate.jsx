import { useState, useEffect } from 'react';
import { Modal, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import { BsMusicNoteList } from 'react-icons/bs';

import { colors } from '../../../../../Styles/config';

export const PlaylistModalUpdate = ({showModal, onClose}) => {
    const [modalVisible, setModalVisible] = useState(true);

    const AddButton = styled(BsMusicNoteList)`
    color: rgb(89, 89, 89);
    border: none;
    width: 2rem;
    height: 2rem;

  &:hover {
    color: #595959;
  }

  &.expanded {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  position: relative;
  color: black;
`;

const OptionsButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;
const ModalWrapper = styled.div`
  .modal {
    background-color: blue; 
  }
`;

const Title = styled.span`
color: ${colors.white};
margin-left: 10px;
line-height: 17px;
`
    return (
        <div>
            <Container>
                <AddButton onClick={() => setModalVisible(true)} />
                <ModalWrapper>
                    <Modal
                        style={{
                            color: "#fff"
                        }}
                        title="Add to Playlist"
                        open={showModal}
                        onCancel={() => {

                        }}
                        closable={false}
                        onOk={() => {

                        }}
                    >

                    </Modal>
                </ModalWrapper>
            </Container>
        </div>
    )
}
