import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';

const LoginContainer: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { navigate } = useNavigation();

  const onSubmit = async () => {
    if (email === 'admin@gmail.com' && password === '123456') {
      navigate('PRIVATE', { screen: 'Bem vindo' });
    } else {
      setEmailError(true);
      setPasswordError(true);
    }
  };

  const handleEmail = (email: string) => setEmail(email);

  const handlePassword = (password: string) => setPassword(password);

  return (
    <Login
      email={email}
      errors={{ email: emailError, password: passwordError }}
      password={password}
      onSubmit={onSubmit}
      handleEmail={handleEmail}
      handlePassword={handlePassword}
    />
  );
};

export default LoginContainer;
