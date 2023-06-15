import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

const styler = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.darkBackground,
  },
  username: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  primary: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  secondary: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  password: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  welcomeMessage: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  OneTwo: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xLarge,
    color: COLORS.secondary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
    marginRight: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.darkBorder,
    height: '100%',
  },
  searchInput: {
    backgroundColor: COLORS.darkBackground,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.darkBorder,
    color: COLORS.lightWhite,
    fontFamily: FONT.regular,
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.medium,
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
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.lightWhite,
    color: COLORS.lightWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.darkBackground,
  },
  tabsContainer: {
    width: '100%',
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styler;
