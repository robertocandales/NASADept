import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  image: {
    flex: 0.6,
    justifyContent: 'center',
    resizeMode: 'contain',
    width: width,
    height: height,
  },
  title: {
    flex: 0.2,
    width: width * 0.95,
    alignItems: 'center',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 29,
    textAlign: 'center',
  },
});

export default styles;
