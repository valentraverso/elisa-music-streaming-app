import React from "react";
import { useParams } from "react-router-dom";
import { PlayerComponent } from "./components/PlayerComponent";

export function PlayerPage() {
    const { id } = useParams();

    return (
      <div>
        {id ? (
          <PlayerComponent id={id} />
        ) : (
          <p>Error: Playlist not found</p>
        )}
      </div>
    );
  }