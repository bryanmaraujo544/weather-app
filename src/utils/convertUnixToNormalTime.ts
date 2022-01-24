export const convertUnixToNormalTime = (unixTime: number) => {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(unixTime * 1000);

  // Hours part from the timestamp
  const hours = (date.getHours() < 10 ? "0" : '') + date.getHours();

  // Minutes part from the timestamp
  const minutes = (date.getMinutes() < 10 ? "0" : '') + date.getMinutes();

  // Will display time in 10:30:23 format
  const formattedTime = hours + ':' + minutes;
  return formattedTime;
}