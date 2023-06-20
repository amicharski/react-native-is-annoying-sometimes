import { StyleSheet } from 'react-native';

import colors from '../constants/colors';
import font from '../constants/font';
import sizes from '../constants/sizes';

const styler = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.darkBackground,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.darkBackground,
  },
  heading: {
    alignItems: 'center',
  },
  username: {
    fontFamily: font.regular,
    fontSize: sizes.large,
    color: colors.secondary,
  },
  primary: {
    fontFamily: font.regular,
    fontSize: sizes.large,
    color: colors.primary,
  },
  secondary: {
    fontFamily: font.regular,
    fontSize: sizes.large,
    color: colors.secondary,
  },
  password: {
    fontFamily: font.regular,
    fontSize: sizes.xLarge,
    color: colors.primary,
    marginTop: 2,
  },
  welcomeMessage: {
    fontFamily: font.regular,
    fontSize: sizes.xLarge,
    color: colors.primary,
    marginTop: 2,
  },
  OneTwo: {
    fontFamily: font.regular,
    fontSize: sizes.xLarge,
    color: colors.secondary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: sizes.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    marginRight: sizes.small,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.medium,
    borderWidth: 1,
    borderColor: colors.darkBorder,
    height: '100%',
  },
  searchInput: {
    backgroundColor: colors.darkBackground,
    borderRadius: sizes.medium,
    borderWidth: 1,
    borderColor: colors.darkBorder,
    color: colors.lightWhite,
    fontFamily: font.regular,
    width: '100%',
    height: '100%',
    paddingHorizontal: sizes.medium,
  },
  signupButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    marginVertical: 10,
  },
  switchButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    marginVertical: 10,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    borderRadius: sizes.medium,
    borderWidth: 1,
    borderColor: colors.lightWhite,
    color: colors.lightWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: colors.darkBackground,
  },
  tabsContainer: {
    width: '100%',
    marginTop: sizes.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: sizes.small / 2,
    paddingHorizontal: sizes.small,
    borderRadius: sizes.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? colors.secondary : colors.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: font.medium,
    color: activeJobType === item ? colors.secondary : colors.gray2,
  }),
});

export default styler;
