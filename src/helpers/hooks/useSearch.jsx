import { useContext} from "react";
import { SearchContext } from "../../context/SearchContext";


export default function useSearch(){
    const [query,setQuery]= useContext(SearchContext);
    return[query,setQuery]
}