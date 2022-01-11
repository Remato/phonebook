import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Welcome from './Welcome';

const WelcomeContainer: FC = () => {
  const { navigate } = useNavigation();

  const onPressLetsGo = () => navigate('PRIVATE', { screen: 'Contatos' });

  return <Welcome onPressLetsGo={onPressLetsGo} />;
};

export default WelcomeContainer;
