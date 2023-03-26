import styled from "styled-components";
import { colors, device } from "../../../config";


export const CategoryButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${device.desktop}{
    width: 40%;
  }
`;

export const FiltersButton = styled.button`
  background-image: radial-gradient(circle at center, rgba(114, 111, 111, 0.35), rgba(216, 216, 216, 0.356));
  background-size: 200% 200%;
  border: none;
  border-radius: 0.2rem;
  color: white;
  padding: 10px 20px;
  margin-left: 1rem;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
  background-color: ${colors["dark-blue"]};
  &:hover {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.545) 0%, rgba(255, 255, 255, 0.608) 100%);
    color: #000;
  }
  &:focus {
    outline: none;
  }
`;