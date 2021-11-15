import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Header from '../../components/Header';
import ClockRecords from '../../components/ClockRecords';
import Footer from '../../components/Footer';

import { Container, Controller } from './styles';

const TimecardRepost: React.FC = () => {
  return (
    <>
      <Container>
        <Card>
          <Header />

          <Controller>
            <Link to="/signup">Logs</Link>
            <Link to="/signup">TimeCard</Link>
          </Controller>

          <ClockRecords />

          <Footer />
        </Card>
      </Container>
    </>
  );
};

export default TimecardRepost;
