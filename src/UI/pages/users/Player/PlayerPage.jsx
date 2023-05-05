import React from "react";
import { useParams } from "react-router-dom";
import { PlayerComponent } from "./components/PlayerComponent";
import { PlayerComponentMobile } from "./components/Mobile/PlayerComponentMobile";
import UseWidth from "../../../../utils/hooks/useWidth";
import { SideBarDesktop } from "../../../layouts/Users/Components/SideBarDesktop";
import { BarLibraryDesktop } from "../../../layouts/Users/Components/BarLibraryDesktop";

export function PlayerPage() {
  const width = UseWidth();


    const { id } = useParams();

    return (
      <>
      {width !== "mobile" && (
        <>
          {id ? (
            <>
            <SideBarDesktop />
            <BarLibraryDesktop />
            <PlayerComponent id={id} />
      
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