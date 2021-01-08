import "./App.css";
import Currency from "./Currency";

function App() {
    return (
        <>
            <h1>Currency Converter</h1>
            <Currency />
            <div className="equal">=</div>
            <Currency />
        </>
    );
}

export default App;
