import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';

import { Record, Section } from './styles';

interface Log {
  id: string;
  type: boolean;
  month: string;
  day: string;
  date: string;
}

interface Logs {
  logs: Log[];
}

const LogRecords: React.FC<Logs> = ({ logs }: Logs) => {
  return (
    <Section>
      {logs.map(log => (
        <Record key={log.id}>
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
        </Record>
      ))}
    </Section>
  );
};

export default LogRecords;
