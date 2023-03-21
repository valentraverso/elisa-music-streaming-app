import { Skeleton } from "@mui/material";
import { IconAddAlbum, IconSettings, IconAvatar, ContainerIconsMenuLibrary, UserAvatar } from "../../../Styles/LayoutsStyles/BarLibraryStyle";

export default function SkeletonLibrary() {
    return (
        <ContainerIconsMenuLibrary>
            <Skeleton sx={{ bgcolor: '#FAF8F6' }}>
                <IconSettings />
            </Skeleton>
            <Skeleton sx={{ bgcolor: '#FAF8F6' }}>
                <IconAddAlbum />
            </Skeleton>
            <Skeleton sx={{ bgcolor: '#FAF8F6' }} variant='circular'>
                <IconAvatar>
                </IconAvatar>
            </Skeleton>
        </ContainerIconsMenuLibrary>
    )
}
