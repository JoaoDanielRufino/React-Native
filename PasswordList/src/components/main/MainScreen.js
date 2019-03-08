import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import firebase from 'react-native-firebase';
import _ from 'lodash';
import Swipeout from 'react-native-swipeout';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: null };
  }

  componentWillMount() {
    firebase.database().ref(`/${firebase.auth().currentUser.uid}/folders`).on('value', snapshot => {
      const dataSource = _.map(snapshot.val(), (val, uid) => {
        return { ...val, uid };
      });
      this.setState({ dataSource });
    });
  }

  renderItem = ({ item }) => (
    <Swipeout
      autoClose
      right={[{
        text: 'Delete',
        type: 'delete',
        onPress: () => {
          Alert.alert(
            'Are you sure you want to delete?',
            'You cannot undo this action',
            [
              { text: 'Cancel', style: 'cancel' },
              {
                text: 'Confirm', onPress: () => {
                  const userUid = firebase.auth().currentUser.uid;
                  firebase.database().ref(`/${userUid}/filesText/${item.uid}`).remove();
                  firebase.database().ref(`/${userUid}/filesName/${item.uid}`).remove();
                  firebase.database().ref(`/${userUid}/folders/${item.uid}`).remove();
                }
              }
            ]
          );
        }
      }]}
    >
      <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Folder', { folderName: item.folderName, folderUid: item.uid })} >
        <View style={styles.list} >
          <View>
            <Text style={styles.title} >{item.folderName}</Text>
          </View>

          <View style={styles.bagdeContainer} >
            <Icon name='right' />
          </View>
        </View>
      </TouchableOpacity>
    </Swipeout>
  )

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.dataSource}
        keyExtractor={(item) => item.uid}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6A15E'
  },
  list: {
    flexDirection: 'row',
    backgroundColor: '#F6A15E',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#565050',
    fontSize: 18
  },
  bagdeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bagde: {
    color: '#000',
    marginRight: 5
  }
});