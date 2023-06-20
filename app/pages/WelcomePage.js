import styles from "./WelcomePage.style";

import { Image, Text, Button } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import Animated from 'react-native-reanimated';

export default WelcomePage = ({ navigation }) => {

  return (
    <GestureHandlerRootView style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.primary}>Welcome to One Two</Text>
      <Text style={styles.secondary}>Love is just around the corner</Text>
      <Button title='Continue' style={styles.button} onPress={() => navigation.navigate('Login')} />
      {/* <PanGestureHandler>
        <Animated.View
          style={{
            position: 'absolute',
            height: '100%',
            width: 100,
            backgroundColor: 'red',
            bottom: 0,
            right: 0,
          }}
        />
      </PanGestureHandler> */}
    </GestureHandlerRootView>
  );
};
