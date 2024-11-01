import React, {useId} from "react";

function InputBox() {
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectedCurrency = "usd"
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
    const id = useId();

  return ( 
    <div className={`bg-slate-300 p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
        id={id}
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => onAmountChange && onAmountChange
            (Number(e.target.value))
          }
          disabled={amountDisabled}
          className="w-full border-none rounded-md text-sm focus:outline-none"
        />
      </div>
      <div className="w-1-2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">
          Currency Type
        </p>
        <select
          className="cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value)
          }}
        >
          {currencyOption.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;