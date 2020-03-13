import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

// const RootStack = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Details: {
//     screen: DetailsScreen,
//   },
// });

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert('This is a button!')}
              style={styles.headerButton}>
              <Text style={styles.titleText}>info</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

//styles
const styles = StyleSheet.create({
  headerButton: {
    alignItems: 'center',
    padding: 10,
  },
  titleText: {
    color: '#fff',
  },
});
