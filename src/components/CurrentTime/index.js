import React, { useEffect, useState } from 'react';
import { time } from '../../services';

const CurrentTime = () => {
  const [tick, setTick] = useState({
    hour: time().hour,
    minute: time().minute
  });

  useEffect(() => {
    let timeInterval = setInterval(() => {
      setTick(prevState => ({
        ...prevState,
        hour: time().hour,
        minute: time().minute
      }))
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);


  
  return (
    <>
      {`${tick.hour}:${tick.minute}`}
    </>
  )
}

export default CurrentTime