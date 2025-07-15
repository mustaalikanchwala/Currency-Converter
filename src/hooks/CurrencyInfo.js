import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState(null);
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]) )
        .catch((err)=> console.error(" API Error: ",err))
        
    },[currency])
    
    return data;

}
export default useCurrencyInfo;
//     data is the actual fetched currency info.

// setData is a function to update it – not useful to components that want the info.

// 📌 If you returned setData, other components would just get a function, not the currency data.
// import React from 'react';
// import useCurrencyInfo from './CurrencyInfo';

// function ShowCurrency(){
//     const inrToUsd = useCurrencyInfo("USD"); // fetches data for USD

//     return (
//         <div>
//             {inrToUsd === null ? "Loading..." : `1 INR = ${inrToUsd} USD`}
//         </div>
//     );
// }
