import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {IPhotoList} from '../../../../redux/slices/PhotoList';
import {URL_BASE_IMAGE} from '../../../../config/API';
import FastImage from 'react-native-fast-image';
import DefaultTypography from '../../../../components/DefaultTypography/DefaultTypography';
import {routesName} from '../../../../navigation/routes';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  item: IPhotoList;
}

const NasaItem: React.FC<IProps> = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(routesName.PHOTO_DETAILS, item)}>
      <DefaultTypography text={`Date: ${item.date}`} />
      <DefaultTypography text={`Identifier: ${item.identifier}`} />
      <DefaultTypography text={`Name: ${item.image}`} />
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        source={{
          uri: `${URL_BASE_IMAGE}/${item.date}/jpg/${item.image}.jpg`,
        }}
        style={styles.image}
      />
      <DefaultTypography text={item.caption} />
    </TouchableOpacity>
  );
};

export default NasaItem;
