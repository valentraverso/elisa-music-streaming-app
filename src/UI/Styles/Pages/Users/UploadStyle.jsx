import styled from "styled-components";
import {HiOutlinePencil} from "react-icons/hi"
import { colors } from "../../config";

export const ContainerUploaderImage = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
`

export const SpanDragorClick = styled.span`
`

export const PlacerDivUpload = styled.div`
width:200px;
height:200px;
background: ${colors.grey};
border-radius:5px;
display: flex;
    align-items: center;
    justify-content: center;
`

export const PlacerImageUpload = styled.img`
width:100%;
height:100%;
border-radius:5px;
object-fit: cover;
`

export const IconNoUploadImage = styled(HiOutlinePencil)`
font-size:5rem;
background: ${colors.grey};
`

export const ContainerInputs = styled.div`
margin: 4% 0;
`

export const LabelInputForm = styled.label`
`

export const InputForm = styled.input`
border: 0;
    border-bottom: 1px solid ${colors.white};
    width: 100%;
    font-size: 1.5rem;
    padding: 10px 0 5px;
&:focus{
    outline:none;
    border-bottom: 1px solid ${colors.blue};
}
`