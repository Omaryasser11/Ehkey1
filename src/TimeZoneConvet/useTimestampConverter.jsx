// useTimestampConverter.js
import { format, parseISO } from 'date-fns';
import { utcToZonedTime, formatInTimeZone } from 'date-fns-tz';

const useTimestampConverter = (timestamp) => {
  // Get the user's local timezone
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Parse the ISO timestamp
  const utcDate = parseISO(timestamp);

  // Convert the UTC date to local timezone
  const localDate = utcToZonedTime(utcDate, timeZone);

  // Format the date and time
  const formattedDate = formatInTimeZone(localDate, timeZone, 'yyyy-MM-dd');
  const formattedTime = formatInTimeZone(localDate, timeZone, 'HH:mm:ss.SSS');

  return { timeZone, formattedDate, formattedTime };
};

export default useTimestampConverter;
