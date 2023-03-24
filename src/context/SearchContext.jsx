import { createContext, useState } from "react";
export const SearchContext = createContext(null);

export const SearchProvider = ({children}) => {
    const [query,setQuery] = useState(null);
    return(
        <SearchContext.Provider value={[query,setQuery]}>
            {children}
        </SearchContext.Provider>
    )
} 