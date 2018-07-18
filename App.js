import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MyListItem from './App/MyListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fListData: [],
    }
  }

  testApi() {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(response => response.json())
      .then(json => this.setState({fListData: json}));
  }

  _renderItem = ({item}) => (
    <MyListItem
      data={item}
    />
  );

  render() {
    this.testApi();
    return (
      <View
        style={styles.container}>
        <FlatList
          data={this.state.fListData}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});