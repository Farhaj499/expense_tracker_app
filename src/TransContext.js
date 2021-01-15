import React, {createContext, useReducer} from "react";
import transReducer from "./transReducer";

const initialTransactions = [
    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -200, desc: "Camera"}
]

export const TransContext = createContext(initialTransactions);

export const TransProvider = ({children})=>{
    let [state, dispatch] = useReducer(transReducer, initialTransactions);
    function addTransaction(transObj){
        dispatch({
            type: 'ADD',
            payload:{
                amount: transObj.amount, 
                desc: transObj.desc
            },
        })
    }
    
    return (
        <TransContext.Provider value={{
            transactions: state,
            addTransaction   //addTransaction: addTransaction
        }}>

            {children}

        </TransContext.Provider>
    )
}
