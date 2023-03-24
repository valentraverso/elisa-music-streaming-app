import styled from "styled-components";
import { colors, device } from "../../../config";

export const ButtonElement = styled.button`
background-color: ${colors.blue};
width: 80%;
border: 0;
border-radius: 5px;
font-size: 1.5rem;
padding: 10px;
height:10%;
z-index: 1;
@media ${device.desktop}{
  width:20%;
}
`