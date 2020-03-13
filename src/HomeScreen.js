import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f00',
      }}>
      <Text style={{fontSize: 20}}>Home Screen</Text>
      <Text
        onPress={() => navigation.navigate('Details')}
        style={styles.navJump}>
        Go to Detail
      </Text>
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  navJump: {
    color: '#348738',
  },
});
