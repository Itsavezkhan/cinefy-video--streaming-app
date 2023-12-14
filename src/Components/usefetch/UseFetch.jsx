import React, { useEffect } from 'react'
import { useState } from 'react'
import { StandardFetchData } from '../../Api'



const UseFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

useEffect((url)=>{

    setLoading("Loading...");
    setError(null);
  

    StandardFetchData(url).then((res) => {
        setLoading(false);
        setData(res);
    }).catch((error)=>{
        setError(error);
    });
}, [url]);

  return {data, loading, error};
}

export default UseFetch;
