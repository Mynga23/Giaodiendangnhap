import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationSigned, NavigationNotSign} from '../navigation/navigation';

const Authentication = () => {
  const [checkStatusSignIn, setCheckStatusSignIn] = useState(false);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@Info_User');
      const userInfo = jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log("🚀 ~ file: authentication.js:16 ~ getDataUser ~ userInfo", userInfo)
      if (jsonValue) {
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
