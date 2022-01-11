import React, { FC } from 'react';
import Button from '../../components/Button';
import { Wrapper, Title, Hand } from './styles';

type Props = {
  onPressLetsGo(): void;
};

const Welcome: FC<Props> = ({ onPressLetsGo }) => {
  return (
    <Wrapper>
      <Title>Admin, {'\n'}Bem vindo à sua agenda telefônica</Title>
      <Hand>👋😊</Hand>
      <Title>Vamos começar?</Title>
      <Button label="Vamos lá" icon="arrow-right" onPress={onPressLetsGo} />
    </Wrapper>
  );
};

export default Welcome;
