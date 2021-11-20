import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { BsFillCircleFill, BsXCircle, BsCheckCircle } from 'react-icons/bs';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  Container,
  Controller,
  Section,
  LogRecord,
  ClockRecord,
} from './styles';
import api from '../../services/api';

interface Log {
  id: string;
  type: boolean;
  month: string;
  day: string;
  date: string;
  created_at: string;
}

const Dashboard: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [controller, setController] = useState<boolean>(true);

  const handleController = () => {
    controller ? setController(false) : setController(true);
  };

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
    });
  }, []);

  return (
    <>
      <Container>
        <Card>
          <Header />

          <Controller>
            {controller ? (
              <button type="button" onClick={handleController} disabled>
                Logs
              </button>
            ) : (
              <button type="button" onClick={handleController}>
                Logs
              </button>
            )}

            {!controller ? (
              <button type="button" onClick={handleController} disabled>
                TimeCard
              </button>
            ) : (
              <button type="button" onClick={handleController}>
                TimeCard
              </button>
            )}
          </Controller>

          <Section>
            {controller ? (
              logs.map(log => (
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
              ))
            ) : (
              <ClockRecord>
                <div>
                  <p>MAY</p>
                  <p>14</p>
                </div>
                <div>
                  <BsCheckCircle />
                  <p>Friday, 13:30</p>

                  <BsXCircle />
                  <p>Friday, 17:00</p>
                </div>
                <div>
                  <p>3h 30m</p>
                </div>
              </ClockRecord>
            )}
          </Section>

          <Footer />
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
