import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';
import _ from 'lodash';
import Swipeout from 'react-native-swipeout';

export default class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: null };
  }

  componentWillMount() {
    const userUid = firebase.auth().currentUser.uid;
    const folderUid = this.props.navigation.getParam('folderUid', 'Error');

    if (folderUid != 'Error') {
      firebase.database().ref(`/${userUid}/filesName/${folderUid}`).on('value', snapshot => {
        const dataSource = _.map(snapshot.val(), (val, uid) => {
          return { ...val, uid };
        });
        this.setState({ dataSource });
      });
    }
  }

  renderItem = ({ item }) => {
    const folderUid = this.props.navigation.getParam('folderUid', 'Error');;
    return (
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
                    const folderUid = this.props.navigation.getParam('folderUid', 'Error');
                    AsyncStorage.removeItem(item.uid); // Deleting the key encryption key
                    firebase.database().ref(`/${userUid}/filesText/${folderUid}/${item.uid}`).remove();
                    firebase.database().ref(`/${userUid}/filesName/${folderUid}/${item.uid}`).remove();
                  }
                }
              ]
            );
          }
        }]}
      >
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('File', { fileName: item.fileName, folderUid, fileUid: item.uid })} >
          <View style={styles.list} >
            <Text style={styles.title} >{item.fileName}</Text>
          </View>
        </TouchableOpacity>
      </Swipeout>
    );
  }

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
    backgroundColor: '#F6A15E',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    padding: 10
  },
  title: {
    color: '#565050',
    fontSize: 18
  }
});