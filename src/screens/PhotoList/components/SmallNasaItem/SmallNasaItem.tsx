import {TouchableOpacity} from 'react-native';
import React from 'react';
import DefaultTypography from '../../../../components/DefaultTypography/DefaultTypography';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {IPhotoList} from '../../../../redux/slices/PhotoList';
import {URL_BASE_IMAGE} from '../../../../config/API';
import {useNavigation} from '@react-navigation/native';
import {routesName} from '../../../../navigation/routes';

interface IProps {
  item: IPhotoList;
}

const SmallNasaItem: React.FC<IProps> = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(routesName.PHOTO_DETAILS, item)}>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        source={{
          uri: `${URL_BASE_IMAGE}/${item.date}/jpg/${item.image}.jpg`,
        }}
        style={styles.image}
      />
      <DefaultTypography text={`ID-${item.identifier}`} />
    </TouchableOpacity>
  );
};

export default SmallNasaItem;
