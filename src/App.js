import React, { useState } from 'react';
import './styles.css';

const SlotMachine = () => {
  const symbols = [
    require('./images/01.png'),
    require('./images/02.png'),
    require('./images/03.png'),
    require('./images/04.png'),
    require('./images/05.png'),
    require('./images/06.png'),
    require('./images/07.png'),
    require('./images/08.png'),
    require('./images/09.png')
  ];

  const [slots, setSlots] = useState(Array.from({ length: 3 }, () => symbols[0]));
  const [winner, setWinner] = useState(false);
  const [score, setScore] = useState(0);

  const spin = () => {
    setWinner(false);
    const newSlots = Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
    setSlots(newSlots);
    checkWinner(newSlots);
  };

  const checkWinner = (newSlots) => {
    if (newSlots[0] === newSlots[1] && newSlots[1] === newSlots[2]) {
      setWinner(true);
      setScore(score + 5);
    }
  };

  return (
    <div className='box'>
      <div className="slot-machine">
        <div className="slot-row">
          {slots.map((symbol, index) => (
            <div key={index} className="slot">
              <img src={symbol} alt={`Slot ${index}`} />
            </div>
          ))}
        </div>
        <button onClick={spin} className='bt-spin'>หมุน</button>
        <div>เครดิต: {score}</div>
        {winner && <h2 className='win-t'>คุณถูกรางวัล</h2>}
      </div>
    </div>
  );
};

export default SlotMachine;
