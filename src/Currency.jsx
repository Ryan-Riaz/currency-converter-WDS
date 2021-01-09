import { v4 as uuid } from "uuid";
const Currency = ({ currency, selectedCurrency, onChangeCurrency }) => {
    return (
        <div>
            <input type="number" className="input" />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currency.map((option) => (
                    <option key={uuid()} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Currency;
