import {Dimensions, StyleSheet} from 'react-native';
import {Theme} from '../../config/theme';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapperScreen: {
    flex: 1,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.01,
    backgroundColor: Theme.colors.primary,
  },
});

export default styles;
