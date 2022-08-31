import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Theme} from '../../config/theme';

const {height} = Dimensions.get('window');

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color={Theme.colors.secondary} size="large" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height,
  },
});
