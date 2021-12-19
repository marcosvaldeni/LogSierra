import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Screen from '../../components/Screen';

import { Container } from './styles';
import api from '../../services/api';
import dateUtil from '../../utils/dateUtil';
import Profile from '../../components/Profile';
// import Active from '../../models/Active';

interface Active {
  id: string;
  activeOn: string;
  activeOff: null | string;
  date: string;
  month: string;
  on: string;
  off: null | string;
  duration: null | string;
}

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
  const [isProfile, setProfile] = useState<boolean>(false);

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
          on: `${format(parseISO(act.activeOn), 'EEEEEE')}, ${format(
            parseISO(act.activeOn),
            'HH:mm',
          )}`,
          off: act.activeOff
            ? `${format(parseISO(act.activeOff), 'EEEEEE')}, ${format(
                parseISO(act.activeOff),
                'HH:mm',
              )}`
            : null,
          duration: dateUtil.getDuration(act.activeOn, act.activeOff),
        };
      });

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
            setProfile={setProfile}
          />
          {isProfile ? (
            <Profile setProfile={setProfile} />
          ) : (
            <Screen logs={logs} actives={actives} />
          )}

          <Footer />
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
