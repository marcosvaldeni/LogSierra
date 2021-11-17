import React, { useEffect, useState } from 'react';
import { isToday, format, parseISO, isAfter } from 'date-fns';
import { Link } from 'react-router-dom';
import { BsFillCircleFill } from 'react-icons/bs';

import Card from '../../components/Card';
import Header from '../../components/Header';
import LogRecords from '../../components/LogRecords';
import Footer from '../../components/Footer';

import { Container, Controller, Section, Record } from './styles';
import api from '../../services/api';

interface Log {
  id: string;
  type: boolean;
  month: string;
  day: string;
  date: string;
  created_at: string;
}

const LogReport: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [controller, setController] = useState<boolean>(true);

  useEffect(() => {
    api.get<Log[]>(`/logs/list`).then(response => {
      const logsFormatted = response.data.map(log => {
        return {
          ...log,
          day: `${format(parseISO(log.created_at), 'EEEE')}, ${format(
            parseISO(log.created_at),
            'HH:mm',
          )}`,
          date: format(parseISO(log.created_at), 'dd'),
          month: format(parseISO(log.created_at), 'LLLL'),
        };
      });

      setLogs(logsFormatted.reverse());
      console.log('loaded');
    });
  }, []);

  return (
    <>
      <Container>
        <Card>
          <Header />

          <Controller>
            <Link to="/logs">Logs</Link>
            <Link to="/timecard">TimeCard</Link>
          </Controller>

          <Section>
            {controller
              ? logs.map(log => (
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
                ))
              : ''}
          </Section>

          <Footer />
        </Card>
      </Container>
    </>
  );
};

export default LogReport;
