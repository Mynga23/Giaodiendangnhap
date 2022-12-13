import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../controller/APIs/Constants';

const Home = () => {
  const [value, setValue] = useState(0);
  const [checkButton, setCheckButton] = useState(true);

  
  const tangValue = () => {
    setCheckButton(true);
    setValue(value + 1);
  };

  const giamValue = () => {
    setCheckButton(true);
    setValue(value - 1);
    if (value == 0) {
      setValue(0);
      setCheckButton(false);
    }
  };

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 50}}>{value}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={tangValue}>
          <Text>Tăng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={giamValue}
          disabled={!checkButton}>
          <Text>Giảm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
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
});
