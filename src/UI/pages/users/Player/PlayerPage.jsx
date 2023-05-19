import React from "react";
import { useParams } from "react-router-dom";
import { PlayerComponent } from "./components/PlayerComponent";
import { PlayerComponentMobile } from "./components/Mobile/PlayerComponentMobile";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { SideBarDesktop } from "../../../layouts/Users/Components/SideBarDesktop";
import { BarLibraryDesktop } from "../../../layouts/Users/Components/BarLibraryDesktop";
import { useLocation } from "react-router-dom";

export function PlayerPage() {
  const width = UseWidth();
  const { id } = useParams();
  const location = useLocation();
  const { albumImg } = location.state || {};



  return (
    <>
      {width !== "mobile" && (
        <>
          {id ? (
            <>
              <SideBarDesktop />
              <BarLibraryDesktop />
              <PlayerComponent id={id} albumImg={albumImg} />
            </>
          ) : (
            <p>Error: Playlist not found</p>
          )}
        </>
      )}

      {width === "mobile" && (
        <>
          {id ? (
            <>
              <PlayerComponentMobile id={id} />
            </>
          ) : (
            <p>Error: Playlist not found</p>
          )}
        </>
      )}

    </>
  );
}