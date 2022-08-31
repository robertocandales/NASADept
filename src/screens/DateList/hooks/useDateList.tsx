import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {routesName} from '../../../navigation/routes';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../redux/hooks/useReduxState';
import {getDateList} from '../../../redux/slices/DateList/thunks';
import {IDataToRender} from '../interfaces';

const useDateList = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {dateList, isLoadingDateList} = useAppSelector(
    store => store.date_list,
  );

  const currentDate = new Date();
  const currentDateFormatted = currentDate.toISOString().split('T')[0];

  const dataToRender: IDataToRender[] = dateList?.map((item, index) => ({
    date: item.date,
    id: String(index),
    currentDate:
      currentDateFormatted === item.date
        ? 'downloading'
        : Date.parse(currentDateFormatted) > Date.parse(item.date)
        ? 'downloaded'
        : 'waiting',
    onPress: () => navigation.navigate(routesName.PHOTO_LIST, item.date),
  }));

  useEffect(() => {
    dispatch(getDateList());
  }, [dispatch]);

  const containerStyles = {
    paddingVertical: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return {dataToRender, isLoadingDateList, containerStyles};
};

export default useDateList;
