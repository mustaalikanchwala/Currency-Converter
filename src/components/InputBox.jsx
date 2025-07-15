import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange, // this both are function refrence 
    currencyOptions=[],
    selectCurrency="usd", // selecting it before so that server will not crash
    amountDisabled=false,
    currencyDisabled=false, // this is for if we dont want to allow the user to add or change amount or currency.
    className="",


}){
   const amountInputid = useId();
//    useId ensures each TextInput gets a unique and stable ID, so the labels correctly match their inputs.

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Amount input */}
            <div className="w-1/2">
                <label htmlFor={amountInputid}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputid}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e)=> onAmountChange &&
                        onAmountChange(Number(e.target.value))
                        // "When the input value changes, call onAmountChange() with the new number value — but only if onAmountChange is defined."
                    }
                    />
            </div>
            {/* Currency type */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange &&
                        onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisabled} // it will allow user to change currency type.
                    >
                    {/* When rendering lists, React uses key to identify which items changed, were added, or removed.

This improves performance and avoids unnecessary re-renders.

Without key, React may misidentify which elements to update, causing bugs or slower UI.

*/}
                    {currencyOptions.map((currency)=>(
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