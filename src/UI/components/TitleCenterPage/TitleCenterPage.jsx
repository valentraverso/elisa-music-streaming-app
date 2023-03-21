import { ContainerBackIcon, ContainerMenuTitle, ContainterTitleCenter, TitleMenu } from "../../Styles/components/TitleCenterPageStyle";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";


export default function TitleCenterPage({title = 'Title Page', back = false}) {
const navigate = useNavigate();

  return (
    <ContainerMenuTitle>
        <ContainerBackIcon>
          {
            back &&
            <IoMdArrowRoundBack onClick={() => navigate(-1)}/>
          }
        </ContainerBackIcon>
        <ContainterTitleCenter>
            <TitleMenu>{title}</TitleMenu>
        </ContainterTitleCenter>
    </ContainerMenuTitle>
  )
}
