import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../controller/APIs/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [user, setUser] = useState();
  console.log("🚀 ~ file: Profile.js:8 ~ Profile ~ user", user)
  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@Info_User');
      console.log("🚀 ~ file: Profile.js:16 ~ getDataUser ~ jsonValue", jsonValue)
      setUser(jsonValue);
    } catch (e) {
      // error reading value
    }
  };
  return (
    <View style={{alignItems:'center', justifyContent:'center', flex: 1}}>
      <TouchableOpacity
        type="submit"
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textButton}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: 100,
    height: 30,
    backgroundColor: COLORS.maudo,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
});
