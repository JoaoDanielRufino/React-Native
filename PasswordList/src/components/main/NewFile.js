import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Dialog from 'react-native-dialog';
import firebase from 'react-native-firebase';

export default class NewFile extends Component {
  constructor(props) {
    super(props);
    this.state = { dialogVisible: false, fileName: '', disable: true };
  }

  onChangeText(fileName) {
    if (this.state.disable && fileName)
      this.setState({ disable: false });
    this.setState({ fileName });
  }

  saveFile() {
    const userUid = firebase.auth().currentUser.uid;
    const folderUid = this.props.navigation.getParam('folderUid', 'Error');

    if (folderUid != 'Error'){
      firebase.database().ref(`${userUid}/filesName/${folderUid}`).push({ fileName: this.state.fileName })
        .then(() => this.setState({ dialogVisible: false, fileName: '', disable: true }))
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.setState({ dialogVisible: true })} >
          <Text style={styles.text} >New File</Text>
        </TouchableOpacity>

        <Dialog.Container visible={this.state.dialogVisible} >
          <Dialog.Title>New File</Dialog.Title>
          <Dialog.Description>Please enter the file name</Dialog.Description>
          <Dialog.Input autoFocus placeholder='File name' value={this.state.fileName} onChangeText={fileName => this.onChangeText(fileName)} />
          <Dialog.Button label='Cancel' onPress={() => this.setState({ dialogVisible: false, fileName: '' })} />
          <Dialog.Button label='Confirm' disabled={this.state.disable} onPress={() => this.saveFile()} />
        </Dialog.Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
    color: '#FFF'
  }
});