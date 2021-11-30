import React, { useEffect, useState } from 'react';
import { format, parseISO, differenceInMinutes } from 'date-fns';
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
import Active from '../../Models/Active';

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
  const [actives, setActives] = useState<Active[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

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

    api.get<Active[]>(`/actives/list`).then(response => {
      const ActivesFormatted = response.data.map(act => {
        return {
          ...act,
          date: format(parseISO(act.activeOn), 'dd'),
          month: format(parseISO(act.activeOn), 'LLLL'),
          on: `${format(parseISO(act.activeOn), 'EEEE')}, ${format(
            parseISO(act.activeOn),
            'HH:mm',
          )}`,
          off: act.activeOff
            ? `${format(parseISO(act.activeOff), 'EEEE')}, ${format(
                parseISO(act.activeOff),
                'HH:mm',
              )}`
            : null,
          duration: act.activeOff
            ? String(
                differenceInMinutes(
                  new Date(act.activeOff),
                  new Date(act.activeOn),
                ),
              )
            : null,
        };
      });
      console.log(ActivesFormatted);

      setActives(ActivesFormatted.reverse());
    });
  }, []);

  return (
    <>
      <Container>
        <Card>
          <Header
            actives={actives}
            isActive={isActive}
            setActives={setActives}
            setIsActive={setIsActive}
          />

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
            {controller
              ? logs.map(log => (
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
              : actives.map(active => (
                  <ClockRecord key={active.id}>
                    <div>
                      <p>{active.month}</p>
                      <p>{active.date}</p>
                    </div>
                    <div>
                      <BsCheckCircle />
                      <p>{active.on}</p>

                      {active.off && <BsXCircle />}
                      <p>{active.off && active.off}</p>
                    </div>
                    <div>
                      <p>{active.duration}</p>
                    </div>
                  </ClockRecord>
                ))}
          </Section>

          <Footer />
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
