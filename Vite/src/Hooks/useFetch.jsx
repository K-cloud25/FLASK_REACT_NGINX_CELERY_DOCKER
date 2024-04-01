import { useEffect, useState, useContext } from "react";
import AppContext from "../Context/AppContext/AppContext.jsx";

function useFetch(url) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const appState = useContext(AppContext);
    useEffect(() =>{
        caller()
    },[url])

    const caller = async () =>{
        fetch( '/api' + url, {
            method: "GET",
            headers: {
                'authentication-token' : appState.getToken(),
                'Access-Control-Allow-Origin': '*',
            },
            redirect: "follow",
        })
            .then(async (response) => {
                if (response.status === 200) {
                    const data = await response.json()
                    setData(data);
                    setError(null);
                    setLoading(false);
                } else {
                    setData([]);
                    setError("Error Occured \n Status Code:" + response.status);
                    setLoading("false");
                }
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false)
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const refresh = () =>{
        caller();
    }

    return { data, loading, error, refresh};
}

export default useFetch;