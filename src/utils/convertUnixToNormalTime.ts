export const convertUnixToNormalTime = (unixTime: number, timezone: number) => {
  const timezoneInHours = timezone / 3600;

  const date = new Date();
  const utcHours = date.getUTCHours(); // this return the hours in UTC 0 time

  date.setHours(utcHours + timezoneInHours); // Here I change the hours of the utc based on timezone

  const dayNumber = date.getDay();
  
  // Hours in string
  const hours = (date.getHours() < 10 ? "0" : '') + (date.getHours());

  // Minutes in string
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