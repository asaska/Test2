import React from "react";
import {TouchableOpacity, View, Image} from 'react-native';
import PushNotification from 'react-native-push-notification' ;

export default class MyListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  _showNoti = () => {
    let item = this.props.data;
    PushNotification.localNotification({
      id: item.id.toString(),
      message: item.title,
      title: 'TestNotification',
      color: 'red',
      number: 0,
    });
  };

  _delNoti = () => {
    PushNotification.cancelAllLocalNotifications()
  };

  render() {
    let item = this.props.data;
    return (
      <TouchableOpacity
        onPress={() =>{
          (!this.state.selected) ?
            this._showNoti():
            this._delNoti();
          this.setState({selected: !this.state.selected});
        }
        }>
        <View>
          <Image
            style={{width: 150, height: 150}}
            source={{uri: item.thumbnailUrl}}/>
        </View>
      </TouchableOpacity>
    );
  }
}