import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  View,
} from 'react-native';
import {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import React from 'react';

import {ICONS, COLORS} from '../controller/APIs/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = ({navigation}) => {
  const initUser = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Email không đúng định dạng')
      .required('Yêu cầu nhập email'),
    password: Yup.string()
      .min(6, 'Mật khẩu quá ngắn')
      .max(20, 'Mật khẩu qúa dài')
      .required('Mật khẩu không được để trống'),
  });

  const login = values => {
    if (values?.email === 'admin@gmail.com' && values?.password === '123456') {
      AsyncStorage.setItem('@Info_User', values);
      navigation.navigate('Home');
    } else {
      Alert.alert('Mật khẩu hoặc tài khoản không đúng !');
    }
  };

  return (
    <View style={styles.ColorBgr}>
      <View style={styles.container}>
        <Formik
          initialValues={initUser}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log('🚀 ~ file: App.js ~ line 55 ~ App ~ values', values);
            login(values);
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const {email, password} = values;
            return (
              <View style={styles.form}>
                <View>
                  <Text style={styles.text1}>XIN MỜI ĐĂNG NHẬP</Text>
                </View>
                <Image style={styles.tinyLogo} source={ICONS.avatar} />
                <View style={styles.formcontrol}>
                  <Text type="email" name="email" style={styles.label}>
                    Email
                  </Text>
                  <TextInput
                    value={email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    style={styles.input}
                  />
                  {errors.email && touched.email ? (
                    <Text style={{color: 'red'}}>{errors.email}</Text>
                  ) : null}
                </View>
                <View style={styles.formcontrol}>
                  <Text type="password" name="password" style={styles.label}>
                    Password
                  </Text>
                  <TextInput
                    value={password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry={true}
                    style={styles.input}
                  />
                  {errors.password && touched.password ? (
                    <Text style={{color: 'red'}}>{errors.password}</Text>
                  ) : null}
                </View>
                <TouchableOpacity
                  type="submit"
                  style={styles.button}
                  onPress={handleSubmit}>
                  <Text style={styles.textbutton}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={styles.containerimage}>
                  <Image
                    style={styles.contentimage}
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png',
                    }}
                  />
                  <Image
                    style={styles.contentimage}
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png',
                    }}
                  />
                  <Image
                    style={styles.contentimage}
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png',
                    }}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
      <View>
        <Text style={styles.texttext}>Quên mật khẩu</Text>
      </View>
      <View style={styles.request}>
        <Text style={styles.texttk}> Bạn chưa có tài khoản ? </Text>
        <TouchableOpacity type="submit" style={styles.button1}>
          <Text style={styles.textbutton1}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Signin;

const styles = StyleSheet.create({
  ColorBgr: {
    backgroundColor: 'pink',
    height: '100%',
  },
  container: {
    marginTop: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10,
    width: '95%',
    marginLeft: 10,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowColor: 'black',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginLeft: 150,
    opacity: 10,
  },
  text1: {
    justifyContent: 'center',
    color: 'red',
    marginLeft: 90,
    fontWeight: 'bold',
    fontSize: 20,
  },
  texttext: {
    fontSize: 15,
    marginLeft: 150,
    marginTop: 20,
    color: 'black',
    justifyContent: 'center',
  },
  label: {color: 'black', fontSize: 15, marginLeft: 10},
  text: {color: 'black', fontSize: 20},
  textbutton: {color: 'white', fontSize: 20},
  textbutton1: {color: 'white', fontSize: 15},
  texttk: {color: 'black', fontSize: 15, marginTop: 20, marginLeft: 30},
  input: {
    width: '90%',
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    borderRadius: 30,
    width: 200,
    height: 50,
    backgroundColor: COLORS.maudo,
    padding: 10,
    alignItems: 'center',
    marginLeft: 95,
    marginTop: 20,
    marginBottom: 30,
    paddingTop: 10,
  },

  button1: {
    borderRadius: 5,
    width: 100,
    height: 40,
    backgroundColor: COLORS.maudo,
    padding: 10,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  containerimage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -20,
  },
  contentimage: {
    height: 40,
    width: 40,
    marginRight: 12,
  },
  request: {
    flexDirection: 'row',
  },
});
