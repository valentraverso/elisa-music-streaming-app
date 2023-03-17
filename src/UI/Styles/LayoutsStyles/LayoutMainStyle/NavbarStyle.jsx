import { style } from "@mui/system";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.div`
    position: fixed;
    top: 0;
    height: 50px;

` 
export const Navbar = styled.div`
height: 100%;

`

export const Logo = styled.img`
height: 100%;

    
`




export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    

` 

export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

`

export const LogoLetters = styled.span`
    top: 0;
    font-weight: 800;
    font-size: 25px;

`