import React, {Component} from 'react';
import {View, Text} from 'react-native';
class DetailNodeClass extends Component {
  static navigationOptions = (props) => {
    console.log('navigation11111props=======', props);
    return {
      headerTitle: 'hjdsfgjdhg',
    };
  };
  render() {
    return <DetailNode {...this.props} />;
  }
}
function DetailNode({navigation}) {
  // console.log('navigation12222=====', navigation);
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: 'Nguyen Van Long',
  //   });
  // }, [navigation]);
  return (
    <View style={{marginTop: 100}}>
      <Text>hello word</Text>
    </View>
  );
}

export default DetailNodeClass;
