export const time = (epoch = new Date()) => ({
  hour: `0${(new Date(epoch)).getHours()}`.slice(-2),
  minute: `0${(new Date(epoch)).getMinutes()}`.slice(-2),
  second: `0${(new Date(epoch)).getSeconds()}`.slice(-2),
  fullDate: new Date(epoch).toLocaleDateString('en-EN',{weekday: 'long', month: 'long', day: 'numeric'}),
  onlyDate: new Date(epoch).toLocaleDateString('en-EN',{month: 'long', day: 'numeric'}),
  dayName: new Date(epoch).toLocaleDateString('en-EN',{ weekday: 'long'}),
  monthName: new Date(epoch).toLocaleDateString('en-EN',{ month: 'long'}),
});