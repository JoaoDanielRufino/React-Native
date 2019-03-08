import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Dialog from 'react-native-dialog';
import firebase from 'react-native-firebase';

export default class NewFolder extends Component {
  constructor(props) {
    super(props);
    this.state = { dialogVisible: false, folderName: '', disable: true };
  }

  saveFolder = () => {
    firebase.database().ref(`/${firebase.auth().currentUser.uid}/folders`).push({folderName: this.state.folderName})
      .then(() => this.setState({ dialogVisible: false, folderName: '' }));
  }

  onChangeText(folderName) {
    if (this.state.disable && folderName)
      this.setState({ disable: false });
    this.setState({ folderName });
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.setState({ dialogVisible: true })} >
          <Text style={styles.text} >New Folder</Text>
        </TouchableOpacity>

        <Dialog.Container visible={this.state.dialogVisible} >
          <Dialog.Title>New Folder</Dialog.Title>
          <Dialog.Description>Please enter the folder name</Dialog.Description>
          <Dialog.Input autoFocus placeholder='Folder name' value={this.state.folderName} onChangeText={folderName => this.onChangeText(folderName)} />
          <Dialog.Button label='Cancel' onPress={() => this.setState({ dialogVisible: false, folderName: '' })} />
          <Dialog.Button label='Confirm' disabled={this.state.disable} onPress={() => this.saveFolder()} />
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