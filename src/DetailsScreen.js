import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DetailsScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f00',
      }}>
      <Text style={{fontSize: 20}}>Details Screen</Text>
      <Text onPress={() => navigation.navigate('Home')} style={styles.navJump}>
        Go to Home
      </Text>
    </View>
  );
}
export default DetailsScreen;

const styles = StyleSheet.create({
  navJump: {
    color: '#348738',
  },
});
