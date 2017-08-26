import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

var api = {
  getServer() {
    var url = `https://safe-ridge-73119.herokuapp.com/test`;
    return fetch(url)
    // .then((res) => {
    //   res.json();
    //   console.log("api res: ", res);
    // })
    // .catch((err) => {console.log(err)});
  }
}

// var serverTest = null;

// fetch('https://safe-ridge-73119.herokuapp.com/test', { method: 'GET' })
// .then((response) => {
//   alert(response);
// });


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentWillMount() {
    api.getServer().then((res) => {
      console.log("res in CWM: ", res);
      this.setState({
        data: res._bodyText
      })
    });
  }

  render() {
    console.log("Data from state ", this.state.data);
    return (
      <View style={styles.container}>
        <Text>Hey, can you see this?{this.state.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
