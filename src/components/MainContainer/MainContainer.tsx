import {View} from 'react-native';
import React from 'react';
import styles from './styles';

interface IProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<IProps> = ({children}) => {
  return <View style={styles.wrapperScreen}>{children}</View>;
};

export default MainContainer;
