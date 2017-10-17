import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { observe } from 'frint-react';
import { Observable } from 'rxjs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Root(props) {
  return (
    <View style={styles.container}>
      <Text>Hello World from FrintJS</Text>
      <Text>Interval: {props.interval}</Text>
    </View>
  );
}

export default observe(function (app) {
  return Observable
    .interval(500)
    .map(x => ({ interval: x }));
})(Root);
