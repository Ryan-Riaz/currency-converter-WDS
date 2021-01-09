import { useEffect, useState } from "react";
import "./App.css";
import Currency from "./Currency";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
    const [currency, setCurrency] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchange, setExchange] = useState();
    const [amount, setAmount] = useState(1);
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                const firstCurrency = Object.keys(data.rates)[0];
                setCurrency([data.base, ...Object.keys(data.rates)]);
                setFromCurrency(data.base);
                setToCurrency(firstCurrency);
                setExchange(data.rates[firstCurrency]);
            });
    }, []);

    let fromAmount, toAmount;
    if (amountInFromCurrency) {
        fromAmount = amount;
        toAmount = fromAmount * exchange;
    } else {
        toAmount = amount;
        fromAmount = toAmount / exchange;
    }

    function handleFromChangeAmount(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(true);
    }

    function handleToChangeAmount(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(false);
    }

    return (
        <>
            <h1>Currency Converter</h1>
            <Currency
                currency={currency}
                selectedCurrency={fromCurrency}
                onChangeCurrency={(e) => setFromCurrency(e.target.value)}
                amount={fromAmount}
                onChangeAmount={handleFromChangeAmount}
            />
            <div className="equal">=</div>
            <Currency
                currency={currency}
                selectedCurrency={toCurrency}
                onChangeCurrency={(e) => setToCurrency(e.target.value)}
                amount={toAmount}
                onChangeAmount={handleToChangeAmount}
            />
        </>
    );
}

export default App;
