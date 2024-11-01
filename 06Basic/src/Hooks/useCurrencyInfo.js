import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [currencyInfo, setCurrencyInfo] = useState({});
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then(response => response.json())
        .then((response => setCurrencyInfo(response[currency])))
    }, [currency])
    return currencyInfo;
}

export default useCurrencyInfo;
