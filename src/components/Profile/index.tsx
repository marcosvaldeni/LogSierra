import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail, FiUser, FiFileText } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import Input from '../Input';
import Button from '../Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { FormContent } from './styles';
import { useAuth } from '../../hooks/auth';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

interface ProfileProps {
  setProfile(value: boolean): void;
}

const Profile: React.FC<ProfileProps> = ({ setProfile }) => {
  const formRef = useRef<FormHandles>(null);

  const { user, updateUser } = useAuth();
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

        const { name, email, old_password, password, password_confirmation } =
          data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Updated Profile',
          description: 'Your information has been updated.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
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

  const handleBack = () => {
    setProfile(false);
  };

  return (
    <FormContent>
      <h1 onClick={handleBack} aria-hidden>
        Back
      </h1>
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
    </FormContent>
  );
};

export default Profile;
