import React from 'react'
import styled from 'styled-components';
import qs from 'query-string';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import AngleLeft from 'src/assets/images/angle-left.svg';
import { CurrentTime } from 'src/components';
import { time } from 'src/services';

const Top = styled.div`
  background-color: rgba(20,20,20, 0.45);
  padding: 10px 0;

  .left-angle{
    display: inline-block;
    padding: 10px 20px;
    background-color: #212121;
    border-radius: 5px;
    cursor: pointer;
    img{
      display: inline-block;
      width: 20px;
    }
  }
  .day-address{
    color: #ffffff;
    font-weight: 600;
  }
  .day-time{
    color: #dddddd;
    font-size: 26px;
  }
`;

const Header = () => {
  const { address } = qs.parse(useLocation().search);
  const history = useHistory();
  return (
    <Top>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <span className="left-angle" onClick={() => history.goBack()}>
            <img src={AngleLeft} alt="Back"/>
          </span>
          <h1 className="day-address">{address.toUpperCase()}</h1>
        </div>
      </div>
    </Top>
  )
}

export default Header;
