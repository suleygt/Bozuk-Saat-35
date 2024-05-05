import { useEffect, useState } from 'react'
import Counter from './components/Counter'
import FakePhone from './components/FakePhone'
import Clock from './components/Clock';
import './styles.css';

function getTime() {
  
  return new Date();
}

export default function App() {
  const [time, setTime] = useState(getTime());

  const [displayClock, setDisplayClock] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(intervalId);
    }, []);

  function toggleClock() {
    setDisplayClock((currentValue) => !currentValue);
  }

  return (
    <div>
      <div className='phone-wrapper'>
        <FakePhone>
          {displayClock && <Clock time={time} toggleClock={toggleClock} />}

          {!displayClock && (
            <div className='toggle-button-container'>
              <button className='toggle-button' onClick={toggleClock}></button>
            </div>
          )}
        </FakePhone>
      </div>

      <Counter displayClock={displayClock} />
    </div>
  )
}
