import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  topBar: {
    marginTop: height * 0.01,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contanier: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
    width,
  },
  play: {
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default styles;
