import { v4 as uuid } from "uuid";
const Currency = ({ currency }) => {
    return (
        <div>
            <input type="number" className="input" />
            <select>
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
