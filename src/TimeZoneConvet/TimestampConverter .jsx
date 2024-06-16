// TimestampConverter.js
import React from 'react';
import useTimestampConverter from './useTimestampConverter';

const TimestampConverter = ({ timestamp }) => {
  const { timeZone, formattedDate, formattedTime } = useTimestampConverter(timestamp);

  return (
    <div>
      <p>Local Timezone: {timeZone}</p>
      <p>Local Date: {formattedDate}</p>
      <p>Local Time: {formattedTime}</p>
    </div>
  );
};

export default TimestampConverter;
