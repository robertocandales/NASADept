import React, {useEffect, useState} from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const [isLoading, setIsloading] = useState<boolean>(true);

  const initilizeApp = async () => {
    setTimeout(() => {
      SplashScreen.hide();
      setIsloading(false);
    }, 2000);
  };

  useEffect(() => {
    initilizeApp();
  }, []);
  return (
    <>
      <Provider store={store}>{!isLoading && <Navigation />}</Provider>
    </>
  );
};

export default App;
