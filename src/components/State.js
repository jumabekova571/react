import React, { useState } from "react";

const State = () => {
      const [status, setStatus] = useState('Не отправлено');
      const [count, setCount] = useState(0);
 
      const clickButton = () => {
        let result = (status === 'Отправить') ? 'Не отправлено' : 'Отправлено';
        setStatus(result);
      }
      
     const clickCount = () => {
      let result = count;
      setCount(++result);
     } 
  
  return (
    <div>
      <button onClick={clickButton}>Отправить</button>
      <button onClick={clickCount}>Увеличить</button>
      <h3>{status}</h3>
      <h3>{count}</h3>
    </div>
  )
}

export default State