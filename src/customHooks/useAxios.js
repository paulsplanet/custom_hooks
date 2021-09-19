import React, { useEffect, useState } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });
    const [trigger, setTrigger] = useState(0);

    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });
        console.log("refetching")
        setTrigger(Date.now());
    }
    
    useEffect(() => {
        if (!opts.url) {
        return;
        } else {
            axiosInstance(opts).then(data => {
                setState({
                    ...setState,
                    loading: false,
                    data,
                });
            }).catch(error => {
                setState({ ...state, loading: false, error })
            })
        }
    }, [trigger])
    return { ...state, refetch };
}

export default useAxios;