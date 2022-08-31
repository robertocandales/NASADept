import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import DefaultTypography from '../../../../components/DefaultTypography/DefaultTypography';
import {IDataToRender} from '../../interfaces';
import {Theme} from '../../../../config/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IProps {
  item: IDataToRender;
  index: number;
}

const DateRow: React.FC<IProps> = ({item, index}) => {
  const {date, currentDate, onPress} = item;

  return (
    <TouchableOpacity
      style={[
        styles.RowContainer,
        {
          backgroundColor:
            index % 2 ? Theme.colors.newGray : Theme.colors.primary,
        },
      ]}
      onPress={onPress}>
      <View style={styles.containerStyle}>
        <Icon name="rocket" size={30} color={Theme.colors.secondary} />
        <DefaultTypography text={currentDate} />
      </View>
      <DefaultTypography text={date} />
    </TouchableOpacity>
  );
};

export default DateRow;
