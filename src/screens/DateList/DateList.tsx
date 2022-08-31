import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import DefaultTypography from '../../components/DefaultTypography/DefaultTypography';
import Loader from '../../components/Loader/Loader';
import MainContainer from '../../components/MainContainer/MainContainer';
import DateRow from './components/DateRow/DateRow';
import useDateList from './hooks/useDateList';
import {IDataToRender} from './interfaces';

const DateList = () => {
  const {dataToRender, isLoadingDateList, containerStyles} = useDateList();

  const flatListOptimizationProps = {
    initialNumToRender: 5,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    showsVerticalScrollIndicator: false,
    keyExtractor: useCallback((item: IDataToRender) => item.id, []),
  };

  return (
    <MainContainer>
      <>
        <DefaultTypography
          text="Date List"
          containerStyles={containerStyles}
          title
        />
      </>

      {isLoadingDateList ? (
        <Loader />
      ) : (
        <>
          <FlatList
            data={dataToRender}
            renderItem={({item, index}) => (
              <DateRow item={item} index={index} />
            )}
            {...flatListOptimizationProps}
          />
        </>
      )}
    </MainContainer>
  );
};

export default DateList;
