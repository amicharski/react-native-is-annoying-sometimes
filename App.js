import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from 'expo-router';

import { StyleSheet } from 'react-native';
import LoginPage from './app/pages/LoginPage';

export default function App() {
  const [fontsLoaded] = useFonts({
    'DMBold': require('./assets/fonts/DMSans-Bold.ttf'),
    'DMMedium': require('./assets/fonts/DMSans-Medium.ttf'),
    'DMRegular': require('./assets/fonts/DMSans-Regular.ttf'),
  });

  console.log(fontsLoaded);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <SplashScreen />; // load splash screen
  }
  return (
    // <SafeAreaView>
    //   <Text>Hello</Text>
    // </SafeAreaView>
    <Stack.Navigator onLayout={onLayoutRootView}>
      <Stack.Screen name='Login' component={LoginPage} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  regular: {
    fontFamily: 'DMRegular',
    fontSize: 18,
  }
});
