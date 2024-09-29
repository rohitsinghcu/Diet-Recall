import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomContainer from '../components/CustomContainer';

const HomeScreen = ({navigation}) => {
  return (
    <CustomContainer>
      <View style={styles.innerContainer}>
        <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
        <Image
          resizeMode="contain"
          source={require('../assets/diet_logo.png')}
          style={{
            width: '100%',
            height: 200,
          }}
        />
        <Text style={{color: '#03989F', fontSize: 26, fontWeight: 'bold'}}>
          Welcome!!!
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('FoodDetails')}
          style={{
            backgroundColor: '#03989F',
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#03989F',
            position: 'absolute',
            top: 15,
            right: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="add" size={22} color="#fff" />
          <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </CustomContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
});
