import { useEffect, useState } from "react"


const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    return data
}

// const useCurrencyInfo = async (currency) => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
//         const result = await response.json();
//         setData(result[currency]);
//       } catch (error) {
//         console.error('Error fetching currency info:', error);
//       }
//     };

//     fetchData();
//   }, [currency]);

//   return data;
// };


export default useCurrencyInfo;