import { StyleSheet } from "react-native";

import colors from "../constants/colors";
import font from "../constants/font";
import sizes from "../constants/sizes";

export default style = StyleSheet.create({
  container: {
    width: "100%",
    height: '100%',
    backgroundColor: colors.darkBackground,
  },
  primary: {
    fontFamily: font.regular,
    fontSize: sizes.large,
    color: colors.primary,
    marginLeft: 25,
    fontSize: 30,
  },
  secondary: {
    fontFamily: font.regular,
    fontSize: sizes.large,
    color: colors.secondary,
    marginLeft: 25,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  button: {
    fontFamily: font.regular,
    color: colors.darkBackground,
    backgroundColor: colors.primary,
  }
});
