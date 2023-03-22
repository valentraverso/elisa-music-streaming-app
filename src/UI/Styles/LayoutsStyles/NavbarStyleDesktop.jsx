import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.div`
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  column-gap: 5%;
`;

export const Navbar = styled.div`
position: fixed;
top: 2rem;
display: grid;
grid-template-columns: 30% 70%;
width: 10%;
height: 0%;
z-index: 1003;

`

export const Logo = styled.img`
height: 90%;
z-index: 1002;
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
margin-left: 3rem;

`

export const LogoLetters = styled.span`
margin-left: 1rem;
top: 0;
font-weight: 800;
font-size: 25px;
`