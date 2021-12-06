import React, { useState } from 'react';

import { Controller, Section } from './styles';

import LogRecordComponent from '../LogRecord';
import ClockRecordComponent from '../ClockRecord';
import Log from '../../models/Logs';
import Active from '../../models/Active';

interface Props {
  logs: Log[];
  actives: Active[];
}

const Screen: React.FC<Props> = ({ logs, actives }) => {
  const [controller, setController] = useState<boolean>(true);

  const handleController = () => {
    controller ? setController(false) : setController(true);
  };

  return (
    <>
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
          ? logs.map(log => <LogRecordComponent key={log.id} log={log} />)
          : actives.map(active => (
              <ClockRecordComponent key={active.id} active={active} />
            ))}
      </Section>
    </>
  );
};

export default Screen;
