import styled from "styled-components";
import { device } from "../config";

export const Main = styled.div`
position: relative;
width: 90%;
margin: 5% auto;
min-height: 100vh;
@media ${device.desktop}{
    min-height: 70vh;
    margin: 2% auto;
}
@media ${device.mobile}{
    margin-bottom: 20vh;
}
`




