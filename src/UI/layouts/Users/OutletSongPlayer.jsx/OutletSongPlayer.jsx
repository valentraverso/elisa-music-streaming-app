import { Outlet } from "react-router-dom";
import { Player } from "../../../components/Player/Player";

export default function OutletSongPlayer() {
    return (
        <>
            <Outlet />
            <Player />
        </>
    )
}