import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { time } from 'src/services';
import { Icons } from 'src/components';

const TodayWrapper = styled.div`
  padding: 20px 0;
  .today-time{
    font-size: 100px;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 1px 1px 1px #000000;
  }
  .today-date{
    color: #dddddd;
    font-weight: 500;
    font-size: 26px;
  }
  .today-card{
    background-color: rgba(20,20,20, 0.5);
    border-radius: 7px;
    overflow: hidden;
    min-width: 320px;
    .today-card-header,
    .today-card-body{
      padding: 15px 30px;
    }
    .today-card-header{
      background-color: rgba(20,20,20, 0.5);
      color: #ffffff;
      font-size: 20px;
      font-weight: 500;
    }
    .today-degree{
      font-size: 66px;
      color: #ffffff;
      font-weight: 600;
      text-shadow: 1px 1px 1px #000000;
    }
    .today-image{
      display: inline-block;
      width: 100%;
      max-width: 150px;
    }
    .icon{
      font-size: 1em;
    }
  }
`;

const Today = ({ isFetched, data, error, location: { city } }) => {

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
    <TodayWrapper className="d-flex justify-content-around align-items-center today">
      <div className="text-center">
        <span className="today-time">{tick.hour}:{tick.minute}</span>
        <div className="today-date">
          {
            time().fullDate
          }
        </div>
      </div>
      {
        isFetched && Object.keys(data).length 
        ? <div className="today-card animate">
            <div className="today-card-header">
              {city} | Uzbekistan
            </div>
            <div className="today-card-body d-flex align-items-center">
              <div className="today-forecast me-3">
                <span className="d-block today-degree mb-2">{data.current.temp.toPrecision(2)}&deg;</span>
                <div className="today-condition mb-1 text-grey">
                  {data.current.weather[0].main}
                </div>
                <div className="today-chance mb-1 text-grey">
                  Cloud: {data.current.clouds}%
                </div>
                <div className="today-humidity text-grey">
                  Humidity: {data.current.humidity}%
                </div>
              </div>
              <div>
                <Icons 
                  id={data.current.weather[0].icon}
                />
              </div>
            </div>
          </div>
        : null
      }
      {
        !isFetched 
        ? <div className="today-card">
            <div className="today-card-header">
              <div className="skeleton h-16"></div>
            </div>
            <div className="today-card-body">
              <div className="skeleton h-16 w-70"></div>
              <div className="skeleton h-16 w-90"></div>
              <div className="skeleton h-16"></div>
              <div className="skeleton h-16"></div>
              <div className="skeleton h-16"></div>
            </div>
          </div>
        : null
      }
      {
        isFetched && error 
        ? <div className="today-card">
            <div className="today-card-header">
              {city} | Uzbekistan
            </div>
            <div className="today-card-body">
              <h2 className="text-grey">No data</h2>
            </div>
          </div>
        : null
      }
    </TodayWrapper>
  )
}

export default Today;
