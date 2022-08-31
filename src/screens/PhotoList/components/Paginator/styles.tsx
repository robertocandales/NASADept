import {StyleSheet} from 'react-native';
import {Theme} from '../../../../config/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    marginVertical: 10,
    width: 10,
  },
});

export default styles;
