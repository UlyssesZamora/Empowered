import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styles from "../styles/Calendar.module.css";

interface IUserBusyTime {
  start_time: string;
  end_time: string;
}

const Calendar: React.FC = () => {
  const [busyTimes, setBusyTimes] = useState<{ start: Date; end: Date; }[]>([]);

  useEffect(() => {
    const fetchBusyTimes = async () => {
      const response = await axios.get(
        'https://api.calendly.com/user_busy_times',
        {
          headers: {
  // replace Bearer Token with Token from a Paid Subscription         
            Authorization: 'Bearer B5GRU3KPEN65KY4KTTKPZ5YM3GRKHZSJ',
          },
        }
      );
      const busyTimesList: IUserBusyTime[] = response.data.data;
      const mappedBusyTimes = busyTimesList.map((busyTime) => ({
        start: new Date(busyTime.start_time),
        end: new Date(busyTime.end_time),
      }));
      setBusyTimes(mappedBusyTimes);
    };
    fetchBusyTimes();
  }, []);

  return (
    <FullCalendar  plugins={[dayGridPlugin]} initialView="dayGridMonth" events={busyTimes}  />
  );
};

export default Calendar;

