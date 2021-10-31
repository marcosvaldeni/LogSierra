import React from 'react';
import { Link } from 'react-router-dom';
import { MdSettings, MdPowerSettingsNew } from 'react-icons/md';

import Switch from '../Switch';
import LogoSvg from '../../assets/mLogo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={LogoSvg} alt="LogSierra Logo" />

      <div>
        <div>
          <img
            src="https://ic.pics.livejournal.com/seldonp38/50009290/935221/935221_300.jpg"
            alt="Kate"
          />
          <span>
            <MdSettings />
          </span>
        </div>

        <div>
          <h2>Kate Austen</h2>
          <h3>Federal Prisoner</h3>
          <div>
            <Switch />
            <p>Active</p>
          </div>
        </div>
      </div>

      <Link to="/">
        <MdPowerSettingsNew />
      </Link>
    </Container>
  );
};

export default Header;
