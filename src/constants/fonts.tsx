import {TextStyle} from 'react-native';

const getFonts = (fontFamily: string, fontSize: number): TextStyle => ({
  fontFamily,
  fontSize,
});
export const fonts = {
  poppinsBold18: getFonts('Poppins-Bold', 18),
};
