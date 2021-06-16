export const current = {
  hour: () => `0${(new Date()).getHours()}`.slice(-2),
  minute: () => `0${(new Date()).getMinutes()}`.slice(-2),
  second: () => `0${(new Date()).getSeconds()}`.slice(-2),
}