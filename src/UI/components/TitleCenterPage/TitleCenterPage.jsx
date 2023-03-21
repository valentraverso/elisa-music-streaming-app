import { ContainerBackIcon, ContainerMenuTitle, ContainterTitleCenter, TitleMenu } from "../../Styles/components/TitleCenterPageStyle";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function TitleCenterPage({ title = 'Title Page', back = false, link = -1 }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(link)
  }

  return (
    <ContainerMenuTitle>
      <ContainerBackIcon>
        {
          back &&
          <IoMdArrowRoundBack onClick={handleNavigation} />
        }
      </ContainerBackIcon>
      <ContainterTitleCenter>
        <TitleMenu>{title}</TitleMenu>
      </ContainterTitleCenter>
    </ContainerMenuTitle>
  )
}
