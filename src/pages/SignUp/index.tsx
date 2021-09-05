import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

import LogoSvg from '../../assets/logo.svg';

import getValidationErrors from '../../utils/getValidationErrors';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is mandatory'),
        email: Yup.string()
          .email('Invalid email')
          .required('Email is mandatory'),
        password: Yup.string().min(6, 'At least 6 characters'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

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
        <a href="/">Back</a>
        <Footer />
      </Card>
    </Container>
  );
};

export default SignIn;
