import React, { FC } from 'react';
import phonebook from '../../assets/phonebook.png';
import { Wrapper, Input, ButtonWrapper, Button, Logo } from './styles';

type Props = {
  email: string;
  password: string;
  errors: FormErrors;
  handleEmail(email: string): void;
  handlePassword(password: string): void;
  onSubmit(): void;
};

const Login: FC<Props> = ({
  email,
  password,
  errors,
  onSubmit,
  handleEmail,
  handlePassword,
}) => {
  return (
    <Wrapper>
      <Logo source={phonebook} />
      <Input
        label="Email"
        value={email}
        error={errors.email}
        errorHint="Email inválido"
        onChangeText={handleEmail}
      />
      <Input
        label="Senha"
        value={password}
        error={errors.password}
        errorHint="Senha incorreta"
        isPassword
        onChangeText={handlePassword}
      />
      <ButtonWrapper>
        <Button label="Login" icon="login" onPress={onSubmit} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Login;
