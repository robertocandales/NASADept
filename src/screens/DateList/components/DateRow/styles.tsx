import {StyleSheet} from 'react-native';
import {Theme} from '../../../../config/theme';

export default StyleSheet.create({
  RowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Theme.colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 5,
  },

  containerStyle: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
  },
});
