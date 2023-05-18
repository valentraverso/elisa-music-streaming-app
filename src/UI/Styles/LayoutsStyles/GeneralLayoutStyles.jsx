import styled from "styled-components";
import { device } from "../config";

export const Main = styled.div`
position: relative;
width: 90%;
margin: 5% auto;
min-height: 100vh;
@media ${device.desktop}{
    margin-top: 2%;
    margin-bottom: 30vh;
}
@media ${device.mobile}{
    margin-bottom: 20vh;
}
`




