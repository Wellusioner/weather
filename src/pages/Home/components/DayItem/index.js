import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import qs from 'query-string';
import { time, config } from '../../../../services';
import { Icons } from '../../../../components';

const DayLink = styled(Link)`
  padding: 20px 5px;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s linear;
  .has-shadow{
    text-shadow: 1px 1px 1px #111111;
  }
  .day-number {
    font-size: 20px;
  }
  .day-name{
    font-size: 13px;
    letter-spacing: 3px;
    margin-bottom: 10px;
  }
  .day-image{
    display: inline-block;
    width: 70%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .day-degree{
    font-size: 30px;
    margin-bottom: 8px;
  }
  .day-condition,
  .day-about{
    font-size: 18px;
  }
  .day-condition{
    margin-bottom: 2px;
  }
`;

const DayItem = ({ index, item, location: { city } }) => {
  const searchUrl = qs.stringify({
    id: index,
    address: city,
  });

  return (
    <div className="col day-col">
      <DayLink 
        to={`/${time(item.dt * 1000).dayName.toLowerCase()}?${searchUrl}`} 
        className="d-block animate"
      >
        <div className="day-number has-shadow">{time(item.dt * 1000).onlyDate.toUpperCase()}</div>
        <div className="day-name text-grey">{time(item.dt * 1000).dayName.toUpperCase()}</div>
        <Icons id={item.weather[0].icon} />
        <div className="day-degree has-shadow">{item.temp.min.toPrecision(2)}&deg;/{item.temp.max.toPrecision(2)}&deg;</div>
        <span className="d-block day-condition text-grey">{item.weather[0].main}</span>
      </DayLink>
    </div>
  )
}

export default DayItem;