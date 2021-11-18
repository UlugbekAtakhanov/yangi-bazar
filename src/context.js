import React, {useState, useContext} from "react"

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [itemCoordinates, setItemCoordinates] = useState({})
    const [currentPage, setCurrentPage] = useState({page: "", links: []})

    // const sidebarClose = () => {
    //     setIsSidebarOpen(false)
    // }
    // const sidebarOpen = () => {
    //     setIsSidebarOpen(true)
    // }

    const submenuOpen = (page, coordinates) => {
        // const specificItem = sublinks.find((link) => link.page === page);
        // setCurrentPage(specificItem)
        // setItemCoordinates(coordinates)
        // setIsSubmenuOpen(true)
        
    }
    const submenuClose = () => {
        // setIsSubmenuOpen(false)
    }

    return <AppContext.Provider value = {{
        submenuClose, submenuOpen,

    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}