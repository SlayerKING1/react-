import { useState } from 'react';
import './App.css';
import useCurrencyInfo from './Hooks/useCurrencyInfo';
import { InputBox } from './Components/Inputbox';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo); // Consistent variable name for options

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (amount && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    
    <div className="w-full h-screen flex flex-wrap justify-center items-center">
      <h1 className="text-9xl">
        Welcome to the <span className="font-bold text-orange-700">Currency</span> Calculator
      </h1>
      <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e) => {
          e.preventDefault();
          convert(); 
          setAmount(0);
        }}>
          <div className="w-full mb-1">
            <InputBox 
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amt) => setAmount(amt)} 
              selectedCurrency={from}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              onClick={swap}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-orange-500 bg-blue-400 text-white px-2 py-0.5"
            >
              Swap
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
