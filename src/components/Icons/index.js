import React from 'react';
import PropTypes from 'prop-types';

const Icons = ({ id }) => {
  switch(id){
    case '10d' || '10n':
      return <div className="icon sun-shower">
        <div className="cloud"></div>
        <div className="sun">
          <div className="rays"></div>
        </div>
        <div className="rain"></div>
      </div>
    case '11d' || '11n':
      return <div className="icon thunder-storm">
        <div className="cloud"></div>
        <div className="lightning">
          <div className="bolt"></div>
          <div className="bolt"></div>
        </div>
      </div>
    case '02d' || '02n':
    case '03d' || '03n':
    case '04d' || '04n':
      return <div className="icon cloudy">
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>
    case '13d' || '13n':
      return <div className="icon flurries">
        <div className="cloud"></div>
        <div className="snow">
          <div className="flake"></div>
          <div className="flake"></div>
        </div>
      </div>
    case '09d' || '09n':
      return <div className="icon rainy">
        <div className="cloud"></div>
        <div className="rain"></div>
      </div>
    case '01d' || '01n':
      return <div className="icon sunny">
        <div className="sun">
          <div className="rays"></div>
        </div>
      </div>
    case '50d' || '50n':
      return <div classNameName="icon mist">
        <div classNameName="line"></div>
      </div>
    default:
      return <div className="icon sunny">
        <div className="sun">
          <div className="rays"></div>
        </div>
      </div>
  }
}

Icons.defaultProps = {
  id: '01'
}

Icons.propTypes = {
  id: PropTypes.string.isRequired
}

export default Icons