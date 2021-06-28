import React, { useState, useEffect } from 'react';
import ApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';

const Chart = ({ width, series, categories }) => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "weather-chart",
        fontFamily: 'Proxima, sans-serif',
        foreColor: '#BDC1C4',
        toolbar: {
          tools: {
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
            download: false
          }
        },
        animations: {
          enabled: true
        },
      },
      colors: ["#888888"],
      stroke: {
        enabled: true,
        width: 2,
        colors: ['#1BD5E1']
      },
      fill: {
        type: "solid",
        gradient: {
          colors: ['#1BD5E1'],
          shade: 'dark',
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
        colors: ['#1BD5E1'],
        strokeWidth: 0,
        hover: {
          size: 4,
        }
      },
      grid: {
        show: true,
        strokeDashArray: 5,
        borderColor: '#444444',
      },
      title: {
        text: undefined,
      },
      tooltip: {
        custom: function({ series, dataPointIndex}) {
          return (
            '<div class="py-2 px-3 fw-600">' +
              series[0][dataPointIndex] + "&deg;C"+
            "</div>"
          );
        },
      },
      xaxis: {
        categories,
        labels: {
          formatter: val => val && val.toUpperCase()
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          color: '#555555',
        },
        tooltip: {
          enabled: false
        },
        type: "category",
        crosshairs: {
          show: true,
          position: 'back',
          stroke: {
            color: '#555555',
            width: 1,
            dashArray: 5,
          },
        },
      },
      yaxis: {
        min: 0,
        forceNiceScale: true,
      }
    },
    series,
  });

  useEffect(() => {
    setState(prevState => ({...prevState, series}));
  }, [series]);

  
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <ApexChart
            options={state.options}
            series={state.series}
            type={'line'}
            width={width}
          />
        </div>
      </div>
    </div>
  );
}

Chart.defaultProps = {
  width: 500,
  series: [],
  categories: []
}

Chart.propTypes = {
  width: PropTypes.number.isRequired,
  series: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
}

export default Chart
