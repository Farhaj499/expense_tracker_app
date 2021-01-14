import React from 'react';

function Child() {
    let transactions = [
        {amount: 500, desc: "Cash"},
        {amount: -40, desc: "Book"},
        {amount: -200, desc: "Camera"}
    ]
  return (
    <div className="Cont">
      <h1 className="text_centre"> Expense Tracker </h1>

      <h3> Your Balance <br/> $260 </h3>

      <div className="expns">
          <h3> Income <br/> $500 </h3>
          <h3> Expense <br/> $240 </h3>
      </div>

      <h3> History </h3> 
      <hr/>
      <ul className="list">
          {transactions.map ((transObj, ind)=> { 
              return(
                <li>
                <span> {transObj.desc} </span> <span> {transObj.amount} </span>
                </li>
              )
          })}
      </ul>

      <h3> Add New Transaction </h3>
      <hr/>

      <form className="form">
          <label> Enter Description <br/>
              <input type={Text} required/>
          </label>
          <br/>
          <label> Enter Amount <br/>
              <input type={Number} required/>
          </label>
          <br/>
          <input type="submit" value= "Add Transaction" />
      </form>
    </div>
  );
}

export default Child;
