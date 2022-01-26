export const convertUnixToNormalTime = (unixTime: number, timezone: number) => {
  const timezoneInHours = timezone / 3600;
  console.log({ timezoneInHours });

  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date();
  const utcHours = date.getUTCHours();
  console.log({ utcHours });
  date.setHours(utcHours + timezoneInHours);

  const dayNumber = date.getDay();
  console.log(date.getDay());
  
  // Hours part from the timestamp
  const hours = (date.getHours() < 10 ? "0" : '') + (date.getHours());

  // Minutes part from the timestamp
  const minutes = (date.getMinutes() < 10 ? "0" : '') + date.getMinutes();


  let day;

  switch(dayNumber) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }

  

  // Will display time in 10:30:23 format
  const formattedTime = hours + ':' + minutes;
  return { formattedTime, day };
}