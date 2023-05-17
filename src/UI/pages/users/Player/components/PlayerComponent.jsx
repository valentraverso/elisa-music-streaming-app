import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Playlist from "./Playlist";
import RecomendedSongsList from "./RecomendedSongsList";

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

export function PlayerComponent() {
  const [showPage, setShowPage] = useState(false);

  const togglePage = () => {
    setShowPage(!showPage);
  };

  return (
    <PageContainer className={showPage ? "slide-in" : ""}>
      <NavLink to="/" onClick={togglePage}>
        {/* Back button */}
      </NavLink>
      <Playlist />
      <RecomendedSongsList />
    </PageContainer>
  );
}
