import React, { useState } from "react";

const State = () => {
      const [status, setStatus] = useState('Не отправлено');
      const [count, setCount] = useState(0);
      const countries = ['Kyrgyzstan', 'USA', 'China', 'Italy']
      const students = ['Student #1', 'Student #2', 'Students #3', 'Student#4']
 
    const items = countries.map((item, index) => <p key={index}>{item}</p>)

    const student_list = students.map((item, index) => <p key={index}>{item}</p>)

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
      {items}
        {student_list}
    </div>
  )
}

export default State