import React from 'react';
import {View, Text, Button} from 'react-native';

// export default class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Home', //设置导航条
//   };
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: '#f00',
//         }}>
//         <Text>Home Screen</Text>

//         <Button
//           title="Go to Detail"
//           onPress={() => navigation.navigate('Details')}></Button>
//       </View>
//     );
//   }
// }

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f00',
      }}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Details')}></Button>
    </View>
  );
}
export default HomeScreen;
