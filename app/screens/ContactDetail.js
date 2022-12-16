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
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native';
const ContactDetail = ({route, navigation}) => {
  const {
    idContact,
    nameContact,
    phoneContact,
    emailContact,
    addressContact,
    avatarContact,
  } = route.params?.contact;

  const {handleUpdate} = route.params;

  const initUser = {
    name: nameContact,
    phone: phoneContact,
    email: emailContact,
    address: addressContact,
    avatar: avatarContact,
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Tên quá ngắn')
      .max(20, 'Tên qúa dài')
      .required('Tên không được để trống'),
    phone: Yup.string()
      .min(9, 'Số điện thoại quá ngắn')
      .max(13, 'Số điện thoại  qúa dài')
      .required('Số điện thoại không được để trống'),
    email: Yup.string()
      .email('Email không đúng định dạng')
      .required('Yêu cầu nhập email'),
    address: Yup.string()
      .min(6, 'Địa chỉ quá ngắn')
      .max(100, 'Địa chỉ qúa dài')
      .required('Địa chỉ  không được để trống'),
    avatar: Yup.string()
      // .matches(/((https?):\/\/)+&?)?$/, 'Đây không phải là  một url ảnh!')
      .required('Haỹ dán một url ảnh'),
  });

  const updateContact = value => {
    const newContact = {
      id: Date.now(),
      name: value.name,
      phone: value.phone,
      email: value.email,
      address: value.address,
      avatar: value.avatar,
    };
    handleUpdate(idContact, newContact);
    navigation.pop();
  };

  return (
    <View>
      <View>
        <Formik
          initialValues={initUser}
          validationSchema={validationSchema}
          onSubmit={values => {
            updateContact(values);
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const {name, phone, email, address, avatar} = values;
            return (
              <View style={styles.form}>
                <View>
                  <Text style={styles.text1}>Thông tin chi tiết liên hệ</Text>
                </View>

                <View style={styles.formcontrol}>
                  <Text name="name" style={styles.label}>
                    Tên
                  </Text>
                  <TextInput
                    value={name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    defaultValue={name}
                    style={styles.input}
                  />
                  {errors.name && touched.name ? (
                    <Text style={{color: 'red'}}>{errors.name}</Text>
                  ) : null}
                </View>
                <View style={styles.formcontrol}>
                  <Text type="phone" name="phone" style={styles.label}>
                    Số điện thoại
                  </Text>
                  <TextInput
                    value={phone}
                    defaultValue={phone}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    style={styles.input}
                    keyboardType="phone-pad"
                  />
                  {errors.phone && touched.phone ? (
                    <Text style={{color: 'red'}}>{errors.phone}</Text>
                  ) : null}
                </View>

                <View style={styles.formcontrol}>
                  <Text type="email" name="email" style={styles.label}>
                    Email
                  </Text>
                  <TextInput
                    value={email}
                    defaultValue={email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    style={styles.input}
                  />
                  {errors.email && touched.email ? (
                    <Text style={{color: 'red'}}>{errors.email}</Text>
                  ) : null}
                </View>

                <View style={styles.formcontrol}>
                  <Text type="address" name="address" style={styles.label}>
                    Địa chỉ
                  </Text>
                  <TextInput
                    value={address}
                    defaultValue={address}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    style={styles.input}
                  />
                  {errors.address && touched.address ? (
                    <Text style={{color: 'red'}}>{errors.address}</Text>
                  ) : null}
                </View>
                <View style={{alignItems: 'center', marginTop: 10}}>
                  <Image source={{uri: avatar}} style={styles.avatar} />
                </View>

                <View style={styles.formcontrol}>
                  <Text type="avatar" name="avatar" style={styles.label}>
                    Hình ảnh url
                  </Text>
                  <TextInput
                    value={avatar}
                    defaultValue={avatar}
                    onChangeText={handleChange('avatar')}
                    onBlur={handleBlur('avatar')}
                    style={styles.input}
                  />
                  {errors.avatar && touched.avatar ? (
                    <Text style={{color: 'red'}}>{errors.avatar}</Text>
                  ) : null}
                </View>

                <TouchableOpacity
                  type="submit"
                  style={styles.button}
                  onPress={handleSubmit}>
                  <Text style={styles.textbutton}>Lưu Lại</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};
export default ContactDetail;

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
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },
});
