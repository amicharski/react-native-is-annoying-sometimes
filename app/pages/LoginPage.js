import styler from './LoginPage.style';

import { StyleSheet } from 'react-native';

export default LoginPage = () => {
  return (
    <View>
      <View style={styler.container}>
        <Text style={styler.OneTwo}>One Two</Text>
        <Text style={styler.welcomeMessage}>Find Your Perfect Match</Text>
        <Text>{'\n'}</Text>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.form}>
              <Text style={styles.heading}>Sign in</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder='Username'
                  autoCapitalize='none'
                  required
                />
                <View style={styles.inputLine} />
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder='Password'
                  secureTextEntry
                  required
                />
                <View style={styles.inputLine} />
              </View>
              <View style={styles.links}>
                <TouchableOpacity onPress={() => handleForgotPassword()}>
                  <Text style={styles.linkText}>Forgot Password</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSignup()}>
                  <Text style={styles.linkText}>Signup</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleLogin()}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23242a',
  },
  box: {
    position: 'relative',
    width: 380,
    height: 420,
    backgroundColor: '#1c1c1c',
    borderRadius: 8,
    overflow: 'hidden',
  },
  form: {
    position: 'absolute',
    inset: 2,
    borderRadius: 8,
    backgroundColor: '#28292d',
    zIndex: 10,
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    color: '#F7BCAC',
    fontWeight: '500',
    alignItems: 'center',
    letterSpacing: 0.1,
    fontSize: 16,
    marginBottom: 20,
  },
  inputBox: {
    position: 'relative',
    width: 300,
    marginTop: 35,
  },
  input: {
    position: 'relative',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 16,
  },
  inputLabel: {
    position: 'absolute',
    left: 0,
    paddingVertical: 20,
    fontSize: 16,
    color: '#8f8f8f',
    pointerEvents: 'none',
    letterSpacing: 0.05,
  },
  inputLine: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 2,
    backgroundColor: '#7FEB7F',
    borderRadius: 4,
    pointerEvents: 'none',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  linkText: {
    marginVertical: 10,
    fontSize: 12,
    color: '#8f8f8f',
    textDecorationLine: 'underline',
  },
  button: {
    borderWidth: 1,
    borderColor: '#7FEB7F',
    backgroundColor: 'transparent',
    color: '#fff',
    paddingVertical: 11,
    paddingHorizontal: 25,
    width: 100,
    marginTop: 10,
    borderRadius: 4,
    fontWeight: '600',
    cursor: 'pointer',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
