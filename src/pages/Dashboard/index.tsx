import React from 'react';
import { Link } from 'react-router-dom';
import { BsXCircle, BsCheckCircle } from 'react-icons/bs';

import Card from '../../components/Card';
import Header from '../../components/Header';

import { Container, Controller, Logs } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Card>
          <Header />
          <Controller>
            <Link to="/signup">Actives</Link>
            <Link to="/signup">Logs</Link>
          </Controller>

          <section>
            <Logs>
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
            </Logs>
            <Logs>
              <div>
                <p>MAY</p>
                <p>15</p>
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
            </Logs>
            <Logs>
              <div>
                <p>MAY</p>
                <p>16</p>
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
            </Logs>
          </section>
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
