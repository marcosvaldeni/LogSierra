import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSettings, MdPowerSettingsNew } from 'react-icons/md';

import Switch from '../Switch';
import LogoSvg from '../../assets/mLogo.png';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import Active from '../../models/Active';

import { Container } from './styles';

import dateUtil from '../../utils/dateUtil';

interface Props {
  actives: Active[];
  setActives(value: Active[]): void;
  isActive: boolean;
  setIsActive(value: boolean): void;
  setProfile(value: boolean): void;
}

const Header: React.FC<Props> = ({
  actives,
  setActives,
  isActive,
  setIsActive,
  setProfile,
}) => {
  const { signOut, user } = useAuth();

  useEffect(() => {
    api.get<boolean>('/actives/status').then(response => {
      const newStatus = response.data;
      setIsActive(newStatus);
    });
  }, [setIsActive]);

  const handleActivation = async () => {
    const status: boolean = await (await api.get('/actives/status')).data;

    if (status) {
      setIsActive(false);
      const data: Active = await (await api.get('/actives/active-off')).data;

      const newActves = actives.filter(item => item.id !== data.id);

      setActives([
        {
          ...dateUtil.formatActive(data),
          duration: dateUtil.getDuration(data.activeOn, data.activeOff),
        },
        ...newActves,
      ]);
    } else {
      setIsActive(true);
      const data: Active = await (await api.get('/actives/active-on')).data;

      setActives([dateUtil.formatActive(data), ...actives]);
    }
  };

  const handleProfile = () => {
    setProfile(true);
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
          <div onClick={handleProfile} aria-hidden="true">
            <h2>{user.name}</h2>
            <h3>{user.title}</h3>
          </div>
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
