import styled from "styled-components";
import { device } from "../config";

export const Main = styled.div`
position: relative;
width: 90%;
margin: 5% auto;
min-height: 80vh;
@media ${device.desktop}{
    margin-top: 2%;
    margin-bottom: 15vh;
}
@media ${device.mobile}{
    margin-bottom: 20vh;
}
`




