import React, {useState} from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import DefaultTypography from '../../components/DefaultTypography/DefaultTypography';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Theme} from '../../config/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const PhotoDetails = ({route, navigation}: any) => {
  const {params} = route;
  const [isJsonFormat, setIsJsonFormat] = useState<boolean>(false);

  const containerStyles = {
    paddingVertical: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  };
  const centerText = {
    alignItems: 'center',
  };
  return (
    <MainContainer>
      <ScrollView>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon name="arrow-left" size={30} color={Theme.colors.secondary} />
          </TouchableOpacity>

          <DefaultTypography
            text="NASA - Picture Details"
            containerStyles={containerStyles}
            title
          />
          <TouchableOpacity onPress={() => setIsJsonFormat(!isJsonFormat)}>
            <Icon name="spinner" size={30} color={Theme.colors.secondary} />
          </TouchableOpacity>
        </View>

        {isJsonFormat && (
          <DefaultTypography
            text={JSON.stringify(route?.params ?? 'there is not data')}
          />
        )}
        {!isJsonFormat && (
          <>
            <DefaultTypography
              text={`${params.caption}`}
              containerStyles={centerText}
            />
            <DefaultTypography
              text={`${params.date}\n`}
              containerStyles={centerText}
            />
            <DefaultTypography text={`Identifier: ${params.identifier}\n`} />
            <DefaultTypography text={`Version: ${params.image}\n`} />
            <DefaultTypography
              text={`centroid_coordinates:\nlat: ${params.centroid_coordinates.lat}\nlon: ${params.centroid_coordinates.lon}\n`}
            />
            <DefaultTypography
              text={`dscovr_j2000_position:\nx: ${params.dscovr_j2000_position.x}\ny: ${params.dscovr_j2000_position.y}\nz: ${params.dscovr_j2000_position.z}\n`}
            />
            <DefaultTypography
              text={`lunar_j2000_position:\nx: ${params.lunar_j2000_position.x}\ny: ${params.lunar_j2000_position.y}\nz: ${params.lunar_j2000_position.z}\n`}
            />
            <DefaultTypography
              text={`sun_j2000_position:\nx: ${params.sun_j2000_position.x}\ny: ${params.sun_j2000_position.y}\nz: ${params.sun_j2000_position.z}\n`}
            />
            <DefaultTypography
              text={`attitude_quaternions:\nq0: ${params.attitude_quaternions.q0}\nq1: ${params.attitude_quaternions.q1}\nq2: ${params.attitude_quaternions.q2}\nq3: ${params.attitude_quaternions.q3}\n`}
            />
          </>
        )}
      </ScrollView>
    </MainContainer>
  );
};

export default PhotoDetails;
