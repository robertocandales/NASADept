import {View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import usePhotoListConfig from './hooks/usePhotoListConfig';
import DefaultTypography from '../../components/DefaultTypography/DefaultTypography';
import Loader from '../../components/Loader/Loader';
import MainContainer from '../../components/MainContainer/MainContainer';
import NasaItem from './components/NasaItem/NasaItem';
import Paginator from './components/Paginator/Paginator';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Theme} from '../../config/theme';
import SmallNasaItem from './components/SmallNasaItem/SmallNasaItem';

const PhotoList = ({route, navigation}: any) => {
  const {
    data,
    isLoadingPhotoList,
    containerStyles,
    flatListOptimizationProps,
    switchLayout,
    setSwitchLayout,
    currentIndex,
    flatListOptimizationPropsLayout,
    startPlay,
    isPlayingCarousel,
  } = usePhotoListConfig(route.params);

  return (
    <MainContainer>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="arrow-left" size={30} color={Theme.colors.secondary} />
        </TouchableOpacity>

        <DefaultTypography
          text="NASA - Picture"
          containerStyles={containerStyles}
          title
        />
        <TouchableOpacity onPress={() => setSwitchLayout(!switchLayout)}>
          <Icon
            name="empire"
            size={30}
            color={
              switchLayout ? Theme.colors.tertiary : Theme.colors.secondary
            }
          />
        </TouchableOpacity>
      </View>

      {isLoadingPhotoList ? (
        <Loader />
      ) : (
        <>
          {!switchLayout && (
            <>
              <View style={styles.contanier}>
                <TouchableOpacity onPress={startPlay} style={styles.play}>
                  {!isPlayingCarousel ? (
                    <>
                      <Icon
                        name="play"
                        size={30}
                        color={Theme.colors.secondary}
                      />
                      <DefaultTypography text="Play pictures" />
                    </>
                  ) : (
                    <>
                      <Icon
                        name="stop"
                        size={30}
                        color={Theme.colors.secondary}
                      />
                      <DefaultTypography text="Stop pictures" />
                    </>
                  )}
                </TouchableOpacity>
                <FlatList
                  style={styles.flatlist}
                  data={data}
                  renderItem={({item}) => <NasaItem item={item} />}
                  {...flatListOptimizationProps}
                />
              </View>
              <>
                <Paginator data={data} currentIndex={currentIndex} />
              </>
            </>
          )}
          {switchLayout && (
            <>
              <View style={styles.contanier}>
                <FlatList
                  style={styles.flatlist}
                  data={data}
                  renderItem={({item}) => <SmallNasaItem item={item} />}
                  {...flatListOptimizationPropsLayout}
                />
              </View>
            </>
          )}
        </>
      )}
    </MainContainer>
  );
};

export default PhotoList;
