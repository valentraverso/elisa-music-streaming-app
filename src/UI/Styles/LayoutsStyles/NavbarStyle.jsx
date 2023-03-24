import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors, device } from "../config";

export const Main = styled.div`
position: relative;
height: 60px;
width: 100%;
@media ${device.desktop}{
    height:80px;
    border-bottom: 1px solid rgb(252, 253, 255);
    height: 100%;
}
`;

export const Navbar = styled.div`
position: fixed;
top: 0;
display: grid;
grid-template-columns: 30% 70%;
width: 100%;
height: 100%;
@media ${device.desktop}{
    grid-template-columns: 25% 50% 25%;
}
`

export const Logo = styled.img`

height: 90%;
@media ${device.desktop}{
    height: 60%;
}
`

export const StyledLink = styled(NavLink)`
text-decoration: none;
color: ${colors.white};
height: 60px;
@media ${device.desktop}{
    height:80px;
}
` 

export const LogoContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
@media ${device.desktop}{
    justify-content:center;
}
`

export const LogoLetters = styled.span`

top: 0;
font-weight: 800;
font-size: 25px;
`