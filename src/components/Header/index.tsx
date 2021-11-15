import React from 'react';
import { Link } from 'react-router-dom';
import { MdSettings, MdPowerSettingsNew } from 'react-icons/md';
import { FiPower, FiSettings } from 'react-icons/fi';

import Switch from '../Switch';
import LogoSvg from '../../assets/mLogo.png';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <img src={LogoSvg} alt="LogSierra Logo" />

      <div>
        <div>
          <Link to="/profile">
            <img
              src="https://ic.pics.livejournal.com/seldonp38/50009290/935221/935221_300.jpg"
              alt="Kate"
            />

            <span>
              <MdSettings />
            </span>
          </Link>
        </div>

        <div>
          <Link to="/profile">
            <h2>{user.name}</h2>
          </Link>
          <h3>{user.title}</h3>
          <div>
            <Switch />
            <p>Active</p>
          </div>
        </div>
      </div>

      <button type="button" onClick={signOut}>
        <MdPowerSettingsNew />
      </button>
    </Container>
  );
};

export default Header;
