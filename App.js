import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Footer from './src/components/footer';
import Header from './src/components/header';
import Feed from './src/components/main';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Feed />
        <Footer />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
