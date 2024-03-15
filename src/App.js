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
  const [winners, setWinners] = useState([false, false, false]);
  const [score, setScore] = useState(0);

  const spin = () => {
    setWinners([false, false, false]);
    const newSlots = Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
    setSlots(newSlots);
    checkWinners(newSlots);
  };

  const checkWinners = (newSlots) => {
    const firstSymbol = newSlots[0];
    if (newSlots.every(symbol => symbol === firstSymbol)) {
      const symbolScore = getSymbolScore(firstSymbol);
      if (symbolScore > 0) {
        setScore(score + symbolScore);
        setWinners([true, true, true]);
        return;
      }
    }
    setWinners([false, false, false]);
  };

  const getSymbolScore = (symbol) => {
    switch(symbol) {
      case symbols[0]:
        return 5;
      case symbols[1]:
        return 10;
      case symbols[2]:
        return 20;
        case symbols[3]:
          return 2;
        case symbols[4]:
          return 3;
        case symbols[5]:
          return 4;
          case symbols[6]:
            return 5;
          case symbols[7]:
            return 11;
          case symbols[8]:
            return 25;
      default:
        return 0;
    }
  };

  return (
    <div className='box'>
      <div className="slot-machine">
        <div className="slot-row">
          {slots.map((symbol, index) => (
            <div key={index} className={`slot ${winners[index] ? 'winner' : ''}`}>
              <img src={symbol} alt={`Slot ${index}`} />
            </div>
          ))}
        </div>
        <button onClick={spin} className='bt-spin'>หมุน</button>
        <div className='money-t'>คะแนน: {score}</div>
      </div>
    </div>
  );
};

export default SlotMachine;
