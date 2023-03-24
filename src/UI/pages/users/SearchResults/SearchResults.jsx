import { useParams } from "react-router-dom"; 
import TypeOfSearch from "./components/TypeOfSearch";

export function SearchResults(){
    const {type, query} = useParams();
    return(
        <TypeOfSearch/>

    )
}