import React from 'react';
import styled from 'styled-components';
import { Chart, Icons } from '../../components';
import { Header } from './components';
import { Schema } from '../../schema';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import { cities, time } from '../../services';

import Increase from '../../assets/images/increase.svg';
import Decrease from '../../assets/images/decrease.svg';
import Cloud from '../../assets/images/cloud.svg';
import Humidity from '../../assets/images/humidity.svg';
import Wind from '../../assets/images/wind.svg';
import Pressure from '../../assets/images/pressure.svg';
import Sunrise from '../../assets/images/sunrise.svg';
import Sunset from '../../assets/images/sunset.svg';
import Moonrise from '../../assets/images/moonrise.svg';
import Moonset from '../../assets/images/moonset.svg';


const Current = styled.div`
  background-color: #1f1f1f;
  padding: 0 30px;
  border-radius: 10px;

  .current-degree{
    font-size: 140px;
    color: #ffffff;
  }
  .current-image .icon{
    font-size: 1em;
  }
  .divider{
    margin-top: 8px;
    margin-bottom: 8px;
    height: 1px;
    background-color: #555555;
    width: 100%;
  }
  .current-description{
    font-size: 50px;
    color: #fff;
    font-weight: 300;
  }
  .time-box{
    text-align: center;
    background-color: #2f2f2f;
    padding: 10px 8px;
    border-radius: 6px;
    color: #c3c3c3;
    & > div{
      margin-bottom: 3px;
    }
    & > span{
      font-weight: 500;
    }
    img{
      display: inline-block;
      width: 25px;
      margin-bottom: 6px;
    }
  }
  .skeleton-custom{
    height: 100px;
    width: 100px;
  }
`;

const Day = () => {
  const { search } = useLocation();
  const { address, id } = qs.parse(search);
  const [ city ] = cities.filter(item => item.city.toLowerCase() === address.toLowerCase());

  return (
    <div className="">
      <Header />
      <div className="container">
        <div className="pt-4">
        <Schema
          url='/onecall'
          params={{
            lat: city.lat,
            lon: city.lng,
            units: 'metric',
            exclude: 'current,minutely,hourly'
          }}
        >
          {({ isFetched, data, error }) => {
            let forecast = {}, 
                dailyFr=[];

						if(isFetched && Object.keys(data).length){
              forecast = data.daily.reduce((acc, curr,index) => parseInt(id) === index ? curr : acc, {});
              dailyFr = Object.values(forecast.feels_like).map(val => val.toFixed(0));
              console.log(forecast);
						}
						
            return <>
              <div className="pb-5">
                <div className="row">
                  <div className="col-md-6">
                    {
                      isFetched && Object.keys(forecast).length                       
                      ? <Current
                          className="current-box h-100"
                        >
                          <div className="d-flex justify-content-between">
                            <span className="current-degree">{((forecast.temp.min + forecast.temp.max)/2).toFixed(0)}&deg;</span>
                            <div className="current-image animate">
                              <Icons id="09d"/>
                            </div>
                          </div>
                          <div className="current-description">
                            {forecast.weather[0].description[0].toUpperCase() + forecast.weather[0].description.slice(1)}
                          </div>
                          <div className="divider"></div>
                          <div className="row gy-2 pt-4">
                            <div className="col-md-3">
                              <div className="time-box">
                                <img src={Sunrise} alt="sunrise"/>
                                <div>Sunrise</div>
                                <span>{time(forecast.sunrise * 1000).hour}:{time(forecast.sunrise * 1000).minute} AM</span>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="time-box">
                                <img src={Sunset} alt="sunset"/>
                                <div>Sunset</div> 
                                <span>{time(forecast.sunset * 1000).hour}:{time(forecast.sunset * 1000).minute} PM</span>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="time-box">
                                <img src={Moonrise} alt="moonrise"/>
                                <div>Moonrise</div> 
                                <span>{time(forecast.moonrise * 1000).hour}:{time(forecast.moonrise * 1000).minute} PM</span>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="time-box">
                                <img src={Moonset} alt="moonset"/>
                                <div>Moonset</div> 
                                <span>{time(forecast.moonset * 1000).hour}:{time(forecast.moonset * 1000).minute} AM</span>
                              </div>
                            </div>
                          </div>
                        </Current>
                      : null
                    }
                    {
                      !isFetched 
                      ? (
                        <Current className="current-box h-100 py-4">
                          <div className="d-flex justify-content-between">
                            <div className="col-md-8">
                              <div className="skeleton h-16"></div>
                              <div className="skeleton h-16"></div>
                              <div className="skeleton h-16"></div>
                              <div className="skeleton h-16"></div>
                            </div>
                            <div className="col-md-4">
                              <div className="skeleton skeleton-circle skeleton-custom ms-auto"></div>
                            </div>
                          </div>
                          <div className="skeleton h-16"></div>
                          <div className="skeleton h-16"></div>
                          <div className="divider"></div>
                          <div className="row gy-2 pt-4">
                            <div className="col-md-3">
                              <div className="time-box">
                                <div className="skeleton skeleton-circle mx-auto mb-4"></div>
                                <div className="skeleton h-12"></div>
                                <div className="skeleton h-12"></div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="time-box">
                                <div className="skeleton skeleton-circle mx-auto mb-4"></div>
                                <div className="skeleton h-12"></div>
                                <div className="skeleton h-12"></div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="time-box">
                                <div className="skeleton skeleton-circle mx-auto mb-4"></div>
                                <div className="skeleton h-12"></div>
                                <div className="skeleton h-12"></div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="time-box">
                                <div className="skeleton skeleton-circle mx-auto mb-4"></div>
                                <div className="skeleton h-12"></div>
                                <div className="skeleton h-12"></div>
                              </div>
                            </div>
                          </div>
                        </Current>
                      )
                      : null
                    }
                  </div>
                  <div className="col-md-6">
                    <div className="chart-title text-center text-white">
                      Daily forecast | &deg;C
                    </div>
                    <Chart 
                      width="100%"
                      series={[
                        {
                          name: "",
                          data: [...dailyFr]
                        }
                      ]}
                      categories={['morning', 'day', 'evening', 'night']}
                    />
                  </div>
                </div>
                <div className="pt-4">
									<div className="mb-4 info-title">Additional info</div>
									<div className="row">
										{
											isFetched && Object.keys(forecast).length ? <>
												<div className="col-md-2 col-sm-4 col-6">
													<div className="extra-box text-center">
                            <img src={Decrease} alt=""/>
														<div>Min: {forecast.temp.min.toFixed(0)}&deg;</div>
													</div>
												</div>
												<div className="col-md-2 col-sm-4 col-6">
													<div className="extra-box text-center">
                            <img src={Increase} alt=""/>
														<div>Max: {forecast.temp.max.toFixed(0)}&deg;</div>
													</div>
												</div>
												<div className="col-md-2 col-sm-4 col-6">
													<div className="extra-box text-center">
                            <img src={Cloud} alt=""/>
														<div>Cloud: {forecast.clouds}%</div>
													</div>
												</div>
												<div className="col-md-2 col-sm-4 col-6">
													<div className="extra-box text-center">
                            <img src={Humidity} alt=""/>
														<div>Humidity: {forecast.humidity}%</div>
													</div>
												</div>
												<div className="col-md-2 col-sm-4 col-6">
													<div className="extra-box text-center">
                            <img src={Wind} alt=""/>
														<div>Wind: {forecast.wind_speed}m/s</div>
													</div>
												</div>
												<div className="col-md-2 col-sm-4 col-6">
													<div className="extra-box text-center">
                            <img src={Pressure} alt=""/>
														<div>Pressure: {forecast.pressure}hPa</div>
													</div>
												</div>
											</>
											: null
                    }
                    {
                      !isFetched 
                      ? Array.from({length: 6}, a => a).map((_,i) => {
                        return <div key={i} className="col-md-2 col-sm-4 col-6">
                          <div className="extra-box">
                            <div className="m-auto mb-3 skeleton skeleton-circle"></div>
                            <div className="skeleton h-12"></div>
                            <div className="skeleton h-12"></div>
                          </div>
                        </div>
                      })
                      : null
                    }
                    {
                      error 
                      ? <div className="col-12">
                        <h2 className="text-grey">Something went wrong</h2>
                      </div> 
                      : null
                    }
									</div>
								</div>
              </div>
            </>
          }}
        </Schema>
        </div>
      </div>
    </div>
  )
}

export default Day;
