import {useState, useContext} from "react";
import AppContext from "../Context/AppContext/AppContext";

const GetBuilder = () => {
    const [loading, setLoading] = useState(false);

    const appState = useContext(AppContext);

    const caller = async (url) =>{
        setLoading(false);
        let response = { status : 200, data : {} };
        try{
            response = await fetch('/api' + url, {
                method:"GET",
                redirect:"follow",
                headers : {
                        "authentication-token" : appState.getToken(),
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "authentication-token",
                        "Access-Control-Expose-Headers":"authentication-token",
                },
                mode:"cors"
            })
        }catch(err){
            response = { status : 500, data : err, statusText: "Error while Fetch"}
        }
        setLoading(true);
        return response;
    }

    return { loading, caller};
}

export default GetBuilder;