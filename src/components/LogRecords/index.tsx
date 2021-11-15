import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

import { Record, Section } from './styles';

const LogRecords: React.FC = () => {
  return (
    <Section>
      <Record>
        <div>
          <p>MAY</p>
          <p>14</p>
        </div>
        <div>
          <p>Friday, 13:30</p>
          <BsArrowUpRight />
        </div>
      </Record>
    </Section>
  );
};

export default LogRecords;
