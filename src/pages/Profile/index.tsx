import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail, FiUser, FiFileText } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

interface ProfileFormData {
  email: string;
  password: string;
}

const Profile: React.FC = () => {
  api.get('/');
  const formRef = useRef<FormHandles>(null);

  const { user } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Name is mandatory!'),
          title: Yup.string(),
          email: Yup.string()
            .email('Invalid email!')
            .required('Email is required!'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: val => !!val.length,
            then: Yup.string().min(6, 'At least 6 characters'),
            otherwise: Yup.string(),
          }),

          password_confirmation: Yup.string()
            .nullable()
            .oneOf([Yup.ref('password'), null], 'Password does not match'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // await signIn({
        //   email: data.email,
        //   password: data.password,
        // });

        history.push('/logs');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'authentication error',
          description: 'There was an error signing in, check credentials',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Card>
        <Header />
        <Link to="/">Back</Link>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}
        >
          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="title" icon={FiFileText} placeholder="Title" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="old_password"
            icon={FiLock}
            type="password"
            placeholder="Old Password"
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="New Password"
          />
          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="New Password Confirmation"
          />
          <Button type="submit">Login</Button>
        </Form>

        <Footer />
      </Card>
    </Container>
  );
};

export default Profile;
