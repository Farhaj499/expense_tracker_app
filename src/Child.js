import React, {useContext, useState} from 'react';
import { TransContext } from './TransContext';

function Child() {
    let {transactions, addTransaction} = useContext(TransContext);
    const handleAddition = (event)=>{
      event.preventDefault();
      addTransaction({
        amount: Number(newAmount),
        desc: newDesc
      })
    }

    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const getIncome =()=>{
      let Income = 0;
      for (var i=0; i < transactions.length; i++){
        if(transactions[i].amount > 0)
          Income+=transactions[i].amount
      }
      return Income;
    }

    const getExpense =()=>{
      let Expense =0;
      for (var i=0; i < transactions.length; i++){
        if(transactions[i].amount < 0)
          Expense+=transactions[i].amount
      }
      return Expense;
    }

  return (
    <div className="Cont">
      <h1 className="text_centre"> Expense Tracker </h1>

      <h3> Your Balance <br/> ${getIncome() + getExpense()} </h3>

      <div className="expns">
          <h3> Income <br/> ${getIncome()} </h3>
          <h3> Expense <br/> ${getExpense()} </h3>
      </div>

      <h3> History </h3> 
      <hr/>
      <ul className="list">
          {transactions.map ((transObj, ind)=> { 
              return(
                <li key={ind}>
                <span> {transObj.desc} </span> <span> ${transObj.amount} </span>
                </li>
              )
          })}
      </ul>

      <h3> Add New Transaction </h3>
      <hr/>

      <form className="form" onSubmit={handleAddition}>
          <label> Enter Description <br/>
              <input type={Text}
                placeholder="Description" 
                onChange={(ev)=>setDesc(ev.target.value)
              } required/>
          </label>
          <br/>
          <label> Enter Amount <br/>
              <input type={Number}
                placeholder="Amount" 
                onChange={(ev)=>setAmount(ev.target.value)} required/>
          </label>
          <br/>
          <input type="submit" value= "Add Transaction" />
      </form>
    </div>
  );
}

export default Child;
