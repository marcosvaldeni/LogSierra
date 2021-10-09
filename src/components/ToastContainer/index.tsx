import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasdescription={Number(true)}>
        <FiAlertCircle size={20} />
        <div>
          <strong>An error has happened</strong>
          <p>It was not possible to login on the application</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="success" hasdescription={Number(false)}>
        <FiAlertCircle size={20} />
        <div>
          <strong>An error has happened</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="error" hasdescription={Number(false)}>
        <FiAlertCircle size={20} />
        <div>
          <strong>An error has happened</strong>
          <p>It was not possible to login on the application</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
