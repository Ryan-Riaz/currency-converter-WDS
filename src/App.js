import { useEffect, useState } from "react";
import "./App.css";
import Currency from "./Currency";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
    const [currency, setCurrency] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    useEffect(() => {
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                const firstCurrency = Object.keys(data.rates)[0];
                setCurrency([data.base, ...Object.keys(data.rates)]);
                setFromCurrency(data.base);
                setToCurrency(firstCurrency);
            });
    }, []);
    return (
        <>
            <h1>Currency Converter</h1>
            <Currency
                currency={currency}
                selectedCurrency={fromCurrency}
                onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            />
            <div className="equal">=</div>
            <Currency
                currency={currency}
                selectedCurrency={toCurrency}
                onChangeCurrency={(e) => setToCurrency(e.target.value)}
            />
        </>
    );
}

export default App;
