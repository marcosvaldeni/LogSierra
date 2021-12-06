import React from 'react';
import { BsXCircle, BsCheckCircle } from 'react-icons/bs';

import { ClockRecord } from './styles';

import Active from '../../models/Active';

interface Props {
  active: Active;
}

const ClockRecordComponent: React.FC<Props> = ({ active }) => {
  return (
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
  );
};

export default ClockRecordComponent;
