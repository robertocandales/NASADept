import {View, Text} from 'react-native';
import React, {CSSProperties} from 'react';
import styles from './styles';

interface IProps {
  text: string;
  containerStyles?: CSSProperties;
  title?: boolean;
}

const DefaultTypography: React.FC<IProps> = ({
  text = 'default',
  containerStyles = {},
  title = false,
}) => {
  return (
    <View style={containerStyles}>
      <Text style={[styles.text, {fontSize: title ? 20 : 16}]}>{text}</Text>
    </View>
  );
};

export default DefaultTypography;
