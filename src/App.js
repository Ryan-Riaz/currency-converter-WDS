import { useEffect, useState } from "react";
import "./App.css";
import Currency from "./Currency";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
    const [currency, setCurrency] = useState([]);
    useEffect(() => {
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                setCurrency([data.base, ...Object.keys(data.rates)]);
                console.log(data);
            });
    }, []);
    return (
        <>
            <h1>Currency Converter</h1>
            <Currency currency={currency} />
            <div className="equal">=</div>
            <Currency currency={currency} />
        </>
    );
}

export default App;
