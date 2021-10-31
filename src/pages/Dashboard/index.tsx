import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiPower } from 'react-icons/fi';
import { BsXCircle, BsCheckCircle } from 'react-icons/bs';

import Card from '../../components/Card';
import Switch from '../../components/Switch';

import LogoSvg from '../../assets/mLogo.png';

import { Container, Controller, Logs } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Card>
          <header>
            <img src={LogoSvg} alt="LogSierra Logo" />

            <div>
              <img
                src="https://ic.pics.livejournal.com/seldonp38/50009290/935221/935221_300.jpg"
                alt="Kate"
              />

              <div>
                <h2>Kate Austen</h2>
                <h3>Federal Prisoner</h3>
                <div>
                  <Switch />
                  <p>Active</p>
                </div>
              </div>
              <div>
                <FiSettings />
              </div>
            </div>
          </header>
          <Controller>
            <Link to="/signup">
              <FiPower />
            </Link>
            <div>
              <Link to="/signup">Actives</Link>
              <Link to="/signup">Logs</Link>
            </div>
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
