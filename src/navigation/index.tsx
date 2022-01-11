import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { PrivateStack, PublicStack } from './stacks';

const MainStack = createNativeStackNavigator();

const getInitialRoute = (): string => {
  if (false)
    // se logado
    return 'PRIVATE';

  return 'PUBLIC';
};

const initialRoute = getInitialRoute();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="PUBLIC" component={PublicStack} />
        <MainStack.Screen name="PRIVATE" component={PrivateStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
