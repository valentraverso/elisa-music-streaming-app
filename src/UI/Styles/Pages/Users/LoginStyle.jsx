import styled from "styled-components";
import { colors } from "../../config.jsx"

export const ContainerLogin = styled.div`
`

export const ContainerWelcome = styled.div`
text-align: center;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const H1Welcome = styled.h1`
`

export const SpanWelcome = styled.span``

export const ContainerButtonsLogin = styled.div`
height:70vh;
display:flex;
flex-direction:column;
align-items: center;
justify-content: space-evenly;
&:before {
    content: "";
  position: fixed;
  left: 0;
  right: 0;
  
  display: block;
    background-image: url('/assets/images/dif/muchos-albums.jpg');
    width: 100%;
  height: 75vh;
  
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);

}
`

export const LineWithDot = styled.span`
width: 80%;
z-index: 1;
height: 20px;
background:
radial-gradient(farthest-side, ${colors.white} 90%,transparent ) bottom/ 10px 10px,
linear-gradient(${colors.white} 0 0) bottom 4px left  calc(20% - 50px)/ 40% 1px,
linear-gradient(${colors.white} 0 0) bottom 4px right calc(20% - 50px)/ 40% 1px;
background-repeat:no-repeat;`