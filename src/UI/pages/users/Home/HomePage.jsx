import React from "react";
import { CategoryeButtons } from "./HomeComponents/CategoryButtons";
import { useAuth0 } from "@auth0/auth0-react";
import Albums from "./HomeComponents/Albums";
import PlaylistPage from "../Library/components/PlaylistPage";
import CirclePhotos from "./HomeComponents/UsersPhotos";

export function HomePage() {
  const { getAccessTokenSilently } = useAuth0()

  return (
    <div>
     
      <CategoryeButtons />
      <CirclePhotos />
      <Albums />
      <PlaylistPage />
    </div>
  );
}
