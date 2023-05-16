import { Link } from "react-router-dom"
import { ContainerRecentImg, ContainerRecentSearchAll, RecentDescription, RecentImg, Title } from "../../../../Styles/Pages/Users/components/RecentBarStyle"
import { User } from "../../../../Styles/Pages/Users/components/TypeOfSearchStyle"

export default function UserResults({ userResults }) {
    console.log(userResults)
    return (
        <>
            {
                userResults.map((user) => (
                    <div>
                        <Link to={`/user/${user._id}`}>
                            <ContainerRecentSearchAll key={user._id}>
                                <ContainerRecentImg>
                                    <RecentImg src={user.picture} />
                                </ContainerRecentImg>
                                <RecentDescription>
                                    <User>{user.name}</User>
                                </RecentDescription>
                            </ContainerRecentSearchAll>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}