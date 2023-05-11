import { ContainerRecentImg, ContainerRecentSearchAll, RecentDescription, RecentImg, Title } from "../../../../Styles/Pages/Users/components/RecentBarStyle"
import { Artist } from "../../../../Styles/Pages/Users/components/TypeOfSearchStyle"

export default function Results({ usersResults }) {
    return (
        <>
            {
                usersResults.map((user) => (
                    
                        <ContainerRecentSearchAll>
                            <ContainerRecentImg>
                                <RecentImg src={user.img} />
                            </ContainerRecentImg>
                            <RecentDescription>
                                <Artist>{users.artist}</Artist>
                            </RecentDescription>
                        </ContainerRecentSearchAll>
                    
                ))
            }
        </>
    )
}