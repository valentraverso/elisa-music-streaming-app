import { ContainerRecentImg, ContainerRecentSearchAll, RecentDescription, RecentImg, Title } from "../../../../Styles/Pages/Users/components/RecentBarStyle"
import { User } from "../../../../Styles/Pages/Users/components/TypeOfSearchStyle"

export default function UserResults({ userResults }) {
    console.log(userResults)
    return (
        <>
            {
                userResults.map((user) => (
                    
                        <ContainerRecentSearchAll>
                            <ContainerRecentImg>
                                <RecentImg src={user.picture} />
                            </ContainerRecentImg>
                            <RecentDescription>
                                <User>{user.name}</User>
                            </RecentDescription>
                        </ContainerRecentSearchAll>
                    
                ))
            }
        </>
    )
}