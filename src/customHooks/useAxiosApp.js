import React from "react";
import useAxios from "./useAxios";

const UseAxiosApp = () => {
    const { loading, error, data, refetch } = useAxios({
        url: "https://yts.mx/api/v2/list_movies.json"
    });
    console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`);

    return (
        <div>
            <h4>{data && data.status}</h4>
            <h4>{loading && "Loading"}</h4>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
};

export default UseAxiosApp;