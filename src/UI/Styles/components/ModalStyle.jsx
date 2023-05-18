import styled from "styled-components";
import { colors, device, fontSize } from "../config";
import { AiOutlineDelete } from "react-icons/ai";

export const SpanCreatePlaylist = styled.span`
  float: right;
`;

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: ${colors["dark-blue"]};
  border-radius: 5px;
  padding: 20px;
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  color: black;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
`;

export const Button = styled.button`
float: right;
  padding: 10px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: ${colors.red};
  font-size: 16px;
  margin-bottom: 20px;
`;
export const ButtonCreate = styled(Button)`
  background-color: ${colors.green};
  margin-right: 10px;
`;

export const ContainerButtonsCreate = styled.div`
display: flex;
    justify-content: end;
    margin-top:5%;
`

export const ContainerTitle = styled.div`
@media ${device.mobile}{
  margin: 0 3% 5% 3%;
}
`

export const ContainerButtonsDelete = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
`

export const ButtonDelete = styled(Button)`
background-color: red;
`

export const IconDelete = styled(AiOutlineDelete)`
height: 1.5em;
width: 1.5em;
`

export const ContainerDelete = styled.div`
display: flex;
    align-items: center;
    `