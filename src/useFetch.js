
import { useState, useEffect } from "react";

const useFetch = (url) =>{

    const [data, setData] = useState(null);

    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
 

    useEffect(() => {
        console.log(url)
        //in  set time  fiunction only for symulation loding data with server

        const abortCont=  new AbortController();

        setTimeout(() => {

            fetch(url, {signal:abortCont.signal })
                .then(res => {
                  

                    if (!res.ok) {
                        throw Error('cloud not fetch data for that result');
                    }
                    return res.json();

                })
                .then((data) => {

                    setData(data)
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if(err.message==='AbortError'){
                        console.log('fetch aborted')
                    }else {
                        
                    setError(err.message)
                    setIsPending(false);

                    }

                })


        }, 1000);
        return ()=> abortCont.abort();

    }, [url]);


    return {data, isPending , error}
}
export default  useFetch;

