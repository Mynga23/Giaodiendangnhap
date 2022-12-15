import React, {useEffect, useState} from 'react';
import {NavigationSigned, NavigationNotSign} from '../navigation/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Authentication = () => {
  const [checkStatusSignIn, setCheckStatusSignIn] = useState(false);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@Info_User');
      const userInfo = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (userInfo) {
        setCheckStatusSignIn(!checkStatusSignIn);
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <>{checkStatusSignIn ? <NavigationSigned /> : <NavigationNotSign />}</>
  );
};

export default Authentication;
