import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Header from '../../components/Header';
import LogRecords from '../../components/LogRecords';
import Footer from '../../components/Footer';

import { Container, Controller } from './styles';

const LogReport: React.FC = () => {
  return (
    <>
      <Container>
        <Card>
          <Header />

          <Controller>
            <Link to="/logs">Logs</Link>
            <Link to="/timecard">TimeCard</Link>
          </Controller>

          <LogRecords />

          <Footer />
        </Card>
      </Container>
    </>
  );
};

export default LogReport;
