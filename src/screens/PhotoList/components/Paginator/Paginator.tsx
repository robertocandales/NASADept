import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Theme} from '../../../../config/theme';
import {IPhotoList} from '../../../../redux/slices/PhotoList';

interface IProps {
  data: IPhotoList[];
  currentIndex: number;
}

const Paginator: React.FC<IProps> = ({data, currentIndex}) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => (
        <View
          style={[
            styles.dot,
            {
              backgroundColor:
                currentIndex === index
                  ? Theme.colors.secondary
                  : Theme.colors.newGray,
            },
          ]}
          key={String(index)}
        />
      ))}
    </View>
  );
};

export default Paginator;
