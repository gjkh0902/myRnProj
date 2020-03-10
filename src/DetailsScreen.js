import React from 'react';
import {View, Text, Button} from 'react-native';

// export default class DetailsScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Details', //设置导航条
//   };
//   render() {
//     return (
//       <View style={{}}>
//         <Text>Details Screen</Text>

//         <Button
//           title="Go to Home"
//           onPress={() => navigation.navigate('Home')}></Button>
//       </View>
//     );
//   }
// }

function DetailsScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f00',
      }}>
      <Text>Details Screen</Text>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
}
export default DetailsScreen;
