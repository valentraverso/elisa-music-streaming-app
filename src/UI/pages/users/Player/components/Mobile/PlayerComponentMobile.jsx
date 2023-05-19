import { SideBar } from "../../../../../layouts/Users/Components/SideBar";
import { SideBarDesktop } from "../../../../../layouts/Users/Components/SideBarDesktop";
import PlaylistMobile from "./PlaylisMobil";
import RecomendedSongsList from "./RecomendedSongsListMobil";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { PlayerComponent } from "../PlayerComponent";

const slideInFromBottom = keyframes`
from {
  transform: translateY(100%);
}
to {
  transform: translateY(0%);
}
`;

const PageContainer = styled.div`
animation: ${slideInFromBottom} 0.3s ease-in-out;
`;

export function PlayerComponentMobile() {
  const [showPage, setShowPage] = useState(false);


  return (
    <>
    <PageContainer className={showPage ? "slide-in" : ""}>
      <SideBar />
      <PlaylistMobile />
      <RecomendedSongsList />
    </PageContainer>
    </>
  );
}