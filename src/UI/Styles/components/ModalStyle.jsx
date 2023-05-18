import styled, { keyframes } from "styled-components";
import { colors, device, fontSize } from "../config";

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ButtonAddPlaylist = styled.button`
  width: 125px;
  height: 24px;
  border: 1px ${colors.white} solid;
  border-radius: 5px;
  padding: 0.1rem;
  position: fixed;
  bottom: 16%;
  right: 10%;
  background-color: ${colors.blue};
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
  animation: ${fadeAnimation} 0.3s ease-in-out;
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
  animation: ${fadeAnimation} 0.3s ease-in-out;
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

export const ButtonOpen = styled.button`
float: right;
  padding: 10px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 5px;
  background-color: transparent;
  color: ${colors.white};
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(90deg);
  }
`;
export const ButtonConfirm = styled.button`
float: right;
  padding: 10px;
  margin-right: 1rem;
  background-color: #dc2f2f;
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #363636;
  }
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
export const ButtonCancel = styled.button`
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