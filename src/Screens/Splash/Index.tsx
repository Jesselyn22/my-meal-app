import * as React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from 'react-native-paper';
import {Colors} from '../../Themes/Index';
import NavigationService from '../../Libs/NavigationService';

interface SplashProps extends NativeStackScreenProps<any> {}

//NOTE
//Login on Progress
function _gotoLogin() {
  setTimeout(() => {
    NavigationService.resetRoot('Login');
  }, 3000);
}

//NOTE
//Dashboard on Progress
function _gotoDashboard() {
  setTimeout(() => {
    NavigationService.resetRoot('Dashboard');
  }, 3000);
}

const Splash = (props: SplashProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/Images/logo.jpeg')}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    // width: 400,
    // height: 60,
  },
});
