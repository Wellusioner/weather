import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { current } from '../../services';
import Cloud from '../../assets/images/partly-cloudy.svg';

const DayLink = styled(Link)`
  padding: 20px 5px;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s linear;
  .has-shadow{
    text-shadow: 1px 1px 1px #111111;
  }
  .day-number {
    font-size: 30px;
  }
  .day-name{
    color: #929296;
    font-size: 18px;
    letter-spacing: 3px;
  }
  .day-image{
    display: inline-block;
    width: 50%;
    max-width: 100%;
  }
  .day-degree{
    font-size: 30px;
    margin-bottom: 15px;
  }
  .day-condition,
  .day-about{
    font-size: 20px;
    color: #929296;
  }
  .day-condition{
    margin-bottom: 2px;
  }
`;

const Form = styled.form`
  border-bottom: 1px solid #333333;
  .search-input{
    flex: 1;
    background-color: transparent;
    border: none;
    font-size: 24px;
    color: #dddddd;
    font-weight: 300;
  }
  .search-button{
    padding: 2px 15px;
    font-size: 36px;
    color: #999999;
    background-color: transparent;
    border: none;
    cursor: pointer;
    span{
      display: block;
      transform: rotate(115deg);
    }
  }
`;

const Today = styled.div`
  padding: 20px 0;
  .today-time{
    font-size: 50px;
    font-weight: 600;
    color: #ffffff;
  }
  .today-date{
    color: #dddddd;
    font-weight: 500;
  }
`;

const Home = () => {

  const [tick, setTick] = useState({
    hour: current.hour(),
    minute: current.minute()
  });

  useEffect(() => {
    setInterval(() => {
      setTick(prevState => ({
        ...prevState,
        hour: current.hour(),
        minute: current.minute()
      }))
    }, 1000);
  }, []);

  

  return (
    <>
      <div className="top-block">
        <div className="container">
          <Form className="search-form d-flex">
            <input className="search-input flex-1" type="text" placeholder="Search for a city in Uzbekistan"/>
            <button className="search-button" type="submit"><span>&#9740;</span></button>
          </Form>
          <Today className="today">
            <div>
              <span className="today-time">{tick.hour}:{tick.minute}</span>
              <div className="today-date">Saturday | 15 JUN</div>
            </div>
          </Today>
        </div>
      </div>
      <div className="container">
        <div className="weekdays row row-cols-7 gx-1">
          {
            Array.from({length: 7}).map((a,i) => {
              return <div key={i} className="col day-col">
              <DayLink 
                to="/day" 
                className="d-block"
              >
                <div className="day-number has-shadow">{15 + i} JUN</div>
                <div className="day-name">SUNDAY</div>
                <img className="day-image" src={Cloud} alt="Cloud"/>
                <div className="day-degree has-shadow">18&deg; / 28&deg;</div>
                <span className="d-block day-condition">Sunny</span>
                <div className="day-about">Rain 40%</div>
              </DayLink>
            </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home;