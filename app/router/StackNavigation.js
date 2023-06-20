import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from "../pages/WelcomePage";
import LoginPage from "../pages/LoginPage";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
      <Stack.Screen
        name='Welcome'
        component={WelcomePage}
      />
      <Stack.Screen
        name='Login'
        component={LoginPage}
      />
    </Stack.Navigator>
  )
}