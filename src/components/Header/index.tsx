import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSettings, MdPowerSettingsNew } from 'react-icons/md';

import Switch from '../Switch';
import LogoSvg from '../../assets/mLogo.png';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import Active from '../../Models/Active';

import { Container } from './styles';

interface Props {
  actives: Active[] | null;
  setActives(value: Active[]): void;
  isActive: boolean;
  setIsActive(value: boolean): void;
}

const Header: React.FC<Props> = ({
  actives,
  setActives,
  isActive,
  setIsActive,
}) => {
  const { signOut, user } = useAuth();

  useEffect(() => {
    api.get<boolean>('/actives/status').then(response => {
      const newStatus = response.data;
      setIsActive(newStatus);
    });
  }, []);

  // useEffect(() => {
  //   api.get<Active[]>(`/actives/list`).then(response => {
  //     const ActivesFormatted = response.data.map(act => {
  //       return {
  //         ...act,
  //       };
  //     });
  //     setActives(ActivesFormatted.reverse());
  //   });
  //   console.log('test');
  // }, [isActive]);

  const handleActivation = async () => {
    const status: boolean = await (await api.get('/actives/status')).data;

    if (status) {
      setIsActive(false);
      await api.get('/actives/active-off');
    } else {
      setIsActive(true);
      await api.get('/actives/active-on');
    }
  };

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
            <Switch active={isActive} handleActivation={handleActivation} />
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
