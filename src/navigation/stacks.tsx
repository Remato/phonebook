import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../scenes/Welcome';
import Login from '../scenes/Login';
import Dashboard from '../scenes/Dashboard';
import Contact from '../scenes/Contact';
import NewContact from '../scenes/NewContact';

const Public = createNativeStackNavigator();
const Private = createNativeStackNavigator();

export const PrivateStack = (): JSX.Element => (
  <Private.Navigator initialRouteName="Bem vindo">
    <Private.Screen name="Bem vindo" component={Welcome} />
    <Private.Screen name="Contatos" component={Dashboard} />
    <Private.Screen name="Dados do contato" component={Contact} />
    <Private.Screen name="Novo contato" component={NewContact} />
  </Private.Navigator>
);

export const PublicStack = (): JSX.Element => (
  <Public.Navigator initialRouteName="Login">
    <Public.Screen
      name="Login"
      component={Login}
      // options={{ headerStyle: { backgroundColor: '#55d2ff' } }}
    />
  </Public.Navigator>
);
