import React, { useEffect, useState } from 'react';

const TimePassedComponent = ({ updateAt }) => {
  const [timePassed, setTimePassed] = useState('');
  // console.log("updateAt: " + updateAt);

  useEffect(() => {
    const timeThatPast = (updateAt) => {
      try {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hour = date.getHours().valueOf();
        const minute = date.getMinutes().valueOf();
        const second = date.getSeconds().valueOf();

        const tmpDay = updateAt.split('-')[2];
        const tmpTime = updateAt.split('T')[1];

        if (Number(year) > updateAt.split('-')[0] - 0) {
          const years = Number(year) - (updateAt.split('-')[0] - 0);
          return years + ' years';
        } else if (Number(year) == updateAt.split('-')[0] - 0) {
          if (Number(month) > updateAt.split('-')[1] - 0) {
            const months = Number(month) - (updateAt.split('-')[1] - 0);
            return months + ' months';
          } else if (Number(month) == updateAt.split('-')[1] - 0) {
            if (Number(day) > tmpDay.split('T')[0] - 0) {
              const days = Number(day) - tmpDay.split('T')[0] - 0;
              return days + ' days';
            } else if (Number(day) == tmpDay.split('T')[0] - 0) {
              if (hour > tmpTime.split(':')[0] - 0) {
                const hours = hour - tmpTime.split(':')[0] - 0;
                return hours + ' hours';
              } else if (hour == tmpTime.split(':')[0] - 0) {
                if (minute > tmpTime.split(':')[1] - 0) {
                  const minutes = minute - tmpTime.split(':')[1] - 0;
                  return minutes + ' minutes';
                } else if (minute == tmpTime.split(':')[1] - 0) {
                  if (second > tmpTime.split(':')[2] - 0) {
                    const seconds = second - tmpTime.split(':')[2] - 0;
                    return seconds + ' seconds';
                  }
                }
              }
            }
          }
        } else {
          throw new Error("updateAt is invalid");
        }
      } catch (error) {
        console.log("error: " + error);
      }
    };

    const result = timeThatPast(updateAt);
    setTimePassed(result);

  }, [updateAt]);

  return (
      <a>{timePassed}</a>
  );
};

export default TimePassedComponent;
