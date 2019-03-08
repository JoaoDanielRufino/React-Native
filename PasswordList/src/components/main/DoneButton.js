import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { updateText } from '../../action/FileAction';
import firebase from 'react-native-firebase';
import Crypto from '../../encryption/Crypto';

class DoneButton extends Component {
  saveText() {
    const userUid = firebase.auth().currentUser.uid;
    const folderUid = this.props.navigation.getParam('folderUid', 'Error');
    const fileUid = this.props.navigation.getParam('fileUid', 'Error');

    if (folderUid != 'Error' && fileUid != 'Error') {
      Crypto.encryptData(fileUid, this.props.text, (err, cipherText) => {
        if (!err) {
          firebase.database().ref(`/${userUid}/filesText/${folderUid}/${fileUid}`).set({ text: cipherText })
            .then(() => {
              this.props.updateText('');
              this.props.navigation.goBack()
            });
        }
      });
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.saveText()} >
        <Text style={styles.text} >Done</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  text: state.FileReducer.text
});

export default connect(mapStateToProps, { updateText })(DoneButton);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
    color: '#FFF'
  }
});