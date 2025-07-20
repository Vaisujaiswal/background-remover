import { useAuth } from "@clerk/clerk-react";
import { createContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [credit, setCredit] = useState(false);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const {getToken} = useAuth()

    const loadCreditsData = async () => {

        try {

            const token = await getToken();
            const {data} = await axios.get(`${backendUrl}/api/user/credits`, {headers: {token}});

            if (data.success) {
                setCredit(data.credits);
                console.log("User credit balance:", data.credits);
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }

    }

    const value = {

        credit, setCredit, loadCreditsData, backendUrl, getToken

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;