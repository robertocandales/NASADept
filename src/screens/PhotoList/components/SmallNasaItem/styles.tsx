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
    flex: 0.1,
    justifyContent: 'center',
    resizeMode: 'contain',
    width: width / 3,
    height: height / 6,
  },
  title: {
    flex: 0.2,
    width: width / 4,
    alignItems: 'center',
  },
});

export default styles;
