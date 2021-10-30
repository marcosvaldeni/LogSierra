import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

import LogoSvg from '../../assets/lLogo.svg';

import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Name is mandatory!'),
          email: Yup.string()
            .email('Invalid email!')
            .required('Email is mandatory'),
          password: Yup.string().min(6, 'At least 6 characters!'),
          password_confirmation: Yup.string()
            .required('Password is mandatory!')
            .nullable()
            .oneOf([Yup.ref('password'), null], 'Password does not match!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Registration completed',
          description: 'You can now login to LogSierra',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Registration error',
          description: 'En error occured while registering, please try again.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Card>
        <img src={LogoSvg} alt="LogSierra Logo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />
          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Password confirmation"
          />
          <Button type="submit">Sign Up</Button>
        </Form>
        <Link to="/">Back</Link>
        <Footer />
      </Card>
    </Container>
  );
};

export default SignIn;
