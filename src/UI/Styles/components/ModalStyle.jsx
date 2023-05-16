import styled from "styled-components";
import { colors } from "../config";

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
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  color: black;
  margin-bottom: 20px;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
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