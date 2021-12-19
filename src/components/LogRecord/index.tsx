import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';

import { LogRecord } from './styles';

// import Log from '../../models/Logs';
interface Log {
  id: string;
  type: boolean;
  month: string;
  day: string;
  date: string;
  created_at: string;
}

interface Props {
  log: Log;
}

const LogRecordComponent: React.FC<Props> = ({ log }) => {
  return (
    <LogRecord key={log.id}>
      <div>
        <p>{log.month}</p>
        <p>{log.date}</p>
      </div>
      <div>
        <p>{log.day}</p>
        {log.type ? (
          <BsFillCircleFill style={{ color: '#1CC4AB' }} />
        ) : (
          <BsFillCircleFill style={{ color: '#FF696D' }} />
        )}
      </div>
    </LogRecord>
  );
};

export default LogRecordComponent;
