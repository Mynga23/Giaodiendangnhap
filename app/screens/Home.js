import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const defaultData = [
  {
    id: 1,
    name: 'Anh Ronaldo',
    phone: '098748563',
    email: 'anh7@gmail.com',
    address: 'Ở Bồ Đào Nha và trên mặt đất nha',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/440px-Cristiano_Ronaldo_2018.jpg',
  },
  {
    id: 2,
    name: 'Anh Ronaldo',
    phone: '098748563',
    email: 'anh7@gmail.com',
    address: 'Ở Bồ Đào Nha và trên mặt đất nha',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png',
  },
  {
    id: 3,
    name: 'Anh Ronaldo',
    phone: '098748563',
    email: 'anh7@gmail.com',
    address: 'Ở Bồ Đào Nha và trên mặt đất nha',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/440px-Cristiano_Ronaldo_2018.jpg',
  },
  {
    id: 4,
    name: 'Anh Ronaldo',
    phone: '098748563',
    email: 'anh7@gmail.com',
    address: 'Ở Bồ Đào Nha và trên mặt đất nha',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/440px-Cristiano_Ronaldo_2018.jpg',
  },
  {
    id: 7,
    name: 'Anh Ronaldo',
    phone: '098748563',
    email: 'anh7@gmail.com',
    address: 'Ở Bồ Đào Nha và trên mặt đất nha',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/440px-Cristiano_Ronaldo_2018.jpg',
  },
  {
    id: 8,
    name: 'Anh Ronaldo',
    phone: '098748563',
    email: 'anh7@gmail.com',
    address: 'Ở Bồ Đào Nha và trên mặt đất nha',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png',
  },
  {
    id: 9,
    name: 'Anh Ronaldo',
    phone: '098748563',
    email: 'anh7@gmail.com',
    address: 'Ở Bồ Đào Nha và trên mặt đất nha',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/440px-Cristiano_Ronaldo_2018.jpg',
  },
  {
    id: 10,
    name: 'Anh Ronaldo',
    phone: '098748563',
    email: 'anh7@gmail.com',
    address: 'Ở Bồ Đào Nha và trên mặt đất nha',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png',
  },
  {
    id: 11,
    name: 'Anh Ronaldo',
    phone: '098748563',
    email: 'anh7@gmail.com',
    address: 'Ở Bồ Đào Nha và trên mặt đất nha',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/440px-Cristiano_Ronaldo_2018.jpg',
  },
  {
    id: 12,
    name: 'Manh dem mo',
    phone: '098748563',
    email: 'anh7@gmail.com',
    address: 'Ở Bồ Đào Nha và trên mặt đất nha',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png',
  },
];

const Home = ({navigation}) => {
  const [items, setItems] = useState(defaultData || []);

  const renderItem = ({item}) => <ItemContact item={item} />;

  const onChangeText = text => {
    if (text?.trim() && text.length >= 2) {
      setItems(
        items.filter(item =>
          item?.name?.toLowerCase().includes(text?.trim().toLowerCase()),
        ),
      );
    } else {
      setItems(defaultData);
    }
  };

  const handleAdd = newContact => {
    if (newContact) {
      setItems([newContact, ...items]);
    }
  };

  const handleDelete = id => {
    setItems(
      items.filter(task => {
        if (task?.id !== id) {
          return true;
        }
      }),
    );
  };

  const ItemContact = ({item}) => {
    return (
      <TouchableOpacity style={styles.itemContainer} key={item?.id}>
        <View style={{marginRight: 30, alignItems: 'center', flex: 2}}>
          <Image source={{uri: item?.avatar}} style={styles.avatar} />
          <Text>{item?.name}</Text>
        </View>
        <View style={{justifyContent: 'center', flex: 4}}>
          <Text style={styles.phoneText}>{item?.phone}</Text>
        </View>
        <View style={{justifyContent: 'center', flex: 1}}>
          <TouchableOpacity
            style={styles.buttonDelete}
            onPress={() => handleDelete(item?.id)}>
            <Text style={[styles.searchText, {color: 'white'}]}>Xoá</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() =>
          navigation.navigate('AddContact', {handleAdd: handleAdd})
        }>
        <Image
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Vector-No-Background.png',
          }}
          style={[styles.imageAdd]}
        />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Liên hệ của tôi</Text>
        <View style={styles.headerSearch}>
          <TextInput
            placeholder="Tìm kiếm liên hệ"
            style={styles.headerTextInput}
            onChangeText={onChangeText}
          />
          <TouchableOpacity style={styles.buttonSearch}>
            <Text style={styles.searchText}>Tìm Kiếm</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={items || []}
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 50,
              }}>
              <Text style={styles.searchText}>Không có thông tin</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {height: '87%'},
  headerTitle: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  headerSearch: {
    flexDirection: 'row',
  },
  headerTextInput: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'grey',
    width: 300,
  },
  buttonSearch: {
    borderWidth: 1,
    borderColor: '#f58a42',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#f0e478',
    marginLeft: 5,
  },
  buttonDelete: {
    borderWidth: 1,
    borderColor: '#f58a42',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#e33b70',
    marginLeft: 5,
  },
  searchText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  phoneText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#57ad64',
  },
  itemContainer: {
    flexDirection: 'row',
    width: '90%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
    padding: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imageAdd: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },
  buttonAdd: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    zIndex: 1,
  },
});
