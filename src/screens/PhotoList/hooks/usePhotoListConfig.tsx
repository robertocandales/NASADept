import {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions} from 'react-native';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../redux/hooks/useReduxState';
import {IPhotoList} from '../../../redux/slices/PhotoList';
import {getPhotoList} from '../../../redux/slices/PhotoList/thunks';
const {width} = Dimensions.get('window');

const usePhotoListConfig = (date: string) => {
  const dispatch = useAppDispatch();

  const {photoList, isLoadingPhotoList} = useAppSelector(
    store => store.photo_list,
  );
  const [isPlayingCarousel, setIsPlayingCarousel] = useState<boolean>(false);
  const [switchLayout, setSwitchLayout] = useState<boolean>(false);
  const [currentIndex, setcurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const viewableItemChanged = useRef(({viewableItems}: any) => {
    setcurrentIndex(viewableItems[0]?.index);
  }).current;
  const slideRef = useRef(null);

  const data = photoList.map(item => ({
    ...item,
    date: new Date(item.date).toISOString().split('T')[0].split('-').join('/'),
  }));

  const startPlay = () => {
    setIsPlayingCarousel(!isPlayingCarousel);
  };

  useEffect(() => {
    let interval: any;
    if (isPlayingCarousel && currentIndex < photoList.length - 1) {
      interval = setInterval(() => {
        setcurrentIndex(prevTime => prevTime + 1);
        slideRef.current?.scrollToIndex({
          animated: true,
          index: currentIndex + 1,
        });
      }, 1500);
    } else if (!isPlayingCarousel || photoList.length - 1 === currentIndex) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlayingCarousel, currentIndex, photoList]);

  useEffect(() => {
    dispatch(getPhotoList(date));
  }, [date, dispatch]);

  const containerStyles = {
    paddingVertical: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const flatListOptimizationProps = {
    initialNumToRender: 5,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    pagingEnabled: true,
    bounces: false,
    onScroll: Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
      useNativeDriver: false,
    }),
    onViewableItemsChanged: viewableItemChanged,
    viewabilityConfig: viewConfig,
    ref: slideRef,
    keyExtractor: useCallback((item: IPhotoList) => item.identifier, []),
    getItemLayout: (_, index: number) => ({
      length: width,
      offset: width * index,
      index,
    }),
    decelerationRate: 0,
  };
  const flatListOptimizationPropsLayout = {
    initialNumToRender: 5,
    showsVerticalScrollIndicator: false,
    numColumns: 2,
  };

  return {
    data,
    isLoadingPhotoList,
    containerStyles,
    flatListOptimizationProps,
    switchLayout,
    setSwitchLayout,
    currentIndex,
    setcurrentIndex,
    flatListOptimizationPropsLayout,
    startPlay,
    isPlayingCarousel,
  };
};

export default usePhotoListConfig;
