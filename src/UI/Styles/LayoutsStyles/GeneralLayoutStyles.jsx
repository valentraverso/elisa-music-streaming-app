import styled from "styled-components";
import { device } from "../config";

export const Main = styled.div`
position: relative;
width: 90%;
margin: 5% auto;
min-height: 90vh;
@media ${device.desktop}{
    min-height: 60vh;
}
`




