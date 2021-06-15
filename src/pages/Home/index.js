import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Cloud from '../../assets/images/partly-cloudy.svg';

const DayLink = styled(Link)`
  padding: 20px 5px;
  color: #ffffff;
  text-align: center;
  // background-color: #222222;
  transition: all 0.2s linear;
  &:hover {
    background-color: #2c2c2c;
  }
  .has-shadow{
    text-shadow: 1px 1px 1px #111111;
  }
  .day-number {
    font-size: 30px;
    // margin-bottom: 20px;
  }
  .day-name{
    color: #929296;
    font-size: 18px;
    letter-spacing: 5px;
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
  // .day-about{
  //   color: #929296;
  //   font-size: 20px;
  // }
`;

const Home = () => {
  return (
    <div className="container-fluid">
      <div>
        Search form
      </div>
      <div className="weekdays row row-cols-7 gx-1">
        {
          Array.from({length: 5}).map((a,i) => {
            return <div className="col day-col">
            <DayLink 
              to="/day" 
              className="d-block"
            >
              <div className="day-number has-shadow">{15 + i} JUN</div>
              <div className="day-name">SUNDAY</div>
              <img className="day-image" width="60%" src={Cloud} alt="Cloud"/>
              <div className="day-degree has-shadow">18&deg; / 28&deg;</div>
              <span className="d-block day-condition">Sunny</span>
              <div className="day-about">Rain 40%</div>
            </DayLink>
          </div>
          })
        }
      </div>
    </div>
  )
}

export default Home;