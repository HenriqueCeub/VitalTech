import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import CadUsuario from './components/CadUsuario'; // Import the registration component

const Stack = createStackNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50 , borderRadius: 50}}
      source={require('./assets/logo.png')}
    />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Crie sua Contas" 
          component={CadUsuario} 
          options={{ headerTitle: props => <LogoTitle {...props} /> }}
        />
        {/* Add other screens if necessary */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}