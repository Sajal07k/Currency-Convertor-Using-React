import { React, useId } from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyTypeChange,
    currencyOptions = [],
    selectCurrencyType = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",           /* these all are props */
}) {

    const amountInputId = useId(); /* used in label & its input just like use 'for' in html for input & label. */

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => {
                        const val = e.target.value;
                        // Allow empty string (to let user delete), or digits only
                        if (/^\d*$/.test(val)) {
                            onAmountChange && onAmountChange(val);
                        }
                    }}
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrencyType}
                    onChange={(e) => onCurrencyTypeChange && onCurrencyTypeChange(e.target.value)} /*No neend to type cast as currency type is a string */
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>

        </div>
    );
}

export default InputBox;
