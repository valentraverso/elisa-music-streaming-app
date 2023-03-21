import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../config";

export const Main = styled.div`
position: relative;
height: 60px;
width: 100%;
`;

export const Navbar = styled.div`
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
`
export const StyledLink = styled(Link)`
text-decoration: none;
color: white;
height: 50px;


` 

export const LogoContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;

`

export const LogoLetters = styled.span`
top: 0;
font-weight: 800;
font-size: 25px;
`