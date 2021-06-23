import React, { useState } from 'react';
import {Today, DayItem} from './components';
import { cities } from 'src/services';
import Select from 'react-select';
import { Schema } from 'src/schema';

const customStyles = {
  control: provided => ({
    ...provided,
    backgroundColor: '#212121',
    borderColor: '#383838'
  }),
  indicatorSeparator: provided => ({
    ...provided,
    backgroundColor: '#424242',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#828282',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#989898',
    fontSize: '20px'
  })
}

const Home = () => {  
  const [location, setLocation] = useState(cities[0]);

  // useEffect(() => {
  //   const { lat, lng } = location;
  //   const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=71193d93d89755fdac572b758ed67201`;

  //     (async () => {
  //       try{
  //         const res = await fetch(url);
  //         const data = await res.json();
  //         console.log(data);
  //       }
  //       catch(err){
  //         console.log('Error:', err);
  //       }
  //     })()
  // }, [location]);

  return (
    <>
      <div className="top-block pt-3">
        <div className="container">
          <div className="search-form">
            <Select
              placeholder={'Select a city in Uzbekistan'}
              defaultValue={cities[0]}
              options={cities}
              getOptionLabel={data => data.city}
              getOptionValue={data => data.city}
              isSearchable
              onChange={data => setLocation(data)}
              styles={customStyles}
            />
          </div>
        </div>
      </div>
      <Schema
        url="/onecall"
        params={{
          lat: location.lat,
          lon: location.lng,
          units: 'metric',
          exclude: 'minutely,hourly'
        }}
      >
        {({isFetched, data, error}) => {
          
          return (
            <>
              <div className="top-block">
                <div className="container">
                  <Today {...{location, isFetched, data, error}}/>
                </div>
              </div>
              <div className="bottom-block">
                <div className="container">
                  <div className={`weekdays pb-4 row row-cols-7 ${isFetched ? 'gx-1' : 'gx-3'}`}>
                    {
                      isFetched && Object.keys(data).length ? data.daily.slice(0,7).map((item,i) => {
                        return <DayItem key={i} {...{item, location, index: i}}/>
                      }) : null
                    }
                    {
                      !isFetched 
                      ? Array.from({length: 7}, a => a).map((_,i) => {
                        return <div key={i} className="col day-col py-4">
                          <div className="skeleton h-16 w-70 mx-auto mb-4"></div>
                          <div className="skeleton h-16"></div>
                          <div className="skeleton h-16 mt-3 mb-4 skeleton-circle mx-auto"></div>
                          <div className="skeleton h-16 mb-4"></div>
                          <span className="d-block skeleton h-16"></span>
                        </div>
                      }) 
                      : null
                    }
                    {
                      isFetched && error 
                      ?  <div className="col-12">
                        <h2 className="text-grey">Something went wrong</h2>
                      </div>
                      : null
                    }
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </Schema>
    </>
  )
}

export default Home;