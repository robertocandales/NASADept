interface IDefaultColors {
  primary: string;
  secondary: string;
  card: string;
  text: string;
  tertiary: string;
  notification: string;
  newGray: string;
}

interface ITheme {
  dark: boolean;
  colors: IDefaultColors;
}

export const Theme: ITheme = {
  dark: false,
  colors: {
    primary: '#000000',
    secondary: '#FFFFFF',
    card: '#0B3D91',
    text: '#141414',
    tertiary: '#FC3D21',
    notification: '#ee7155',
    newGray: '#242526',
  },
};
