import styled from "styled-components";
import {colors} from "../../../Styles/config"

export const ContainerEdit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

export const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EditImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const EditLabelImage = styled.label`
    margin-bottom: 10px;
`;

export const InputForm = styled.input`
    width: 200px;
`;

export const ContainerUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 400px;
`;
export const DisplayUsername = styled.span`
border: 0;
border-bottom: 1px solid ${colors.white};
margin-bottom: 30px;
width: 100%;
font-size: 1.2rem;
padding: 10px 0 5px;
background-color: ${colors["dark-blue"]};
&:focus{
outline:none;
border-bottom: 1px solid ${colors.blue};
}
`;

export const DisplayName = styled.input`
border: 0;
border-bottom: 1px solid ${colors.white};
margin-bottom: 30px;
width: 100%;
font-size: 1.2rem;
padding: 10px 0 5px;
background-color: ${colors["dark-blue"]};
&:focus{
outline:none;
border-bottom: 1px solid ${colors.blue};
}
`;

export const DisplayEmail = styled.span`
border: 0;
margin-bottom: 30px;
border-bottom: 1px solid ${colors.white};
width: 100%;
font-size: 1.2rem;
padding: 10px 0 5px;
background-color: ${colors["dark-blue"]};
&:focus{
outline:none;
border-bottom: 1px solid ${colors.blue};
}
`;

export const EditButton = styled.button`
    padding: 10px 20px;
    background-color: #3b46f1;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export const LabelUsername = styled.span`

`;
export const LabelName = styled.span`

`;
export const LabelEmail = styled.span`
`;