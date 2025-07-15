import { useState } from 'react'
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/CurrencyInfo.js'
function App() {
const [amount,setAmount] = useState(0);
const [from,setFrom] = useState('usd');
const [to,setTo] = useState('inr');
const [convertedAmount,setConvertedAmount] = useState(0);

const currencyInfo = useCurrencyInfo(from); // this coustom hook will return data in form of json that is object
const CurrencyOptions = Object.keys(currencyInfo || {}); // this will give all kyes from object eg inr ,aed etc.
// Added fallback to avoid errors if currencyInfo is null
//  the array we add int componet currencyoptions ,it is that only.

const swap = ()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}
//  to convert amount 
const convert = ()=>{
  setConvertedAmount(amount*currencyInfo[to]);
}
const BackgroundImage = 'https://static.vecteezy.com/system/resources/previews/019/523/909/non_2x/abstract-currency-digital-finance-technology-modern-currency-exchange-transfer-profit-on-modern-background-futuristic-wave-flowing-blue-vector.jpg'
  return (
    
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={CurrencyOptions}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                onAmountChange={(amount)=>setAmount(amount)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={
                                  swap
                                }
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={CurrencyOptions}
                                amountDisabled
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
      
    );
}

export default App




