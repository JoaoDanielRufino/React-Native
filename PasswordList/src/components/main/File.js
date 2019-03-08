import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { updateText, fetchTextData } from '../../action/FileAction';
import _ from 'lodash';
import firebase from 'react-native-firebase';
import Crypto from '../../encryption/Crypto';

class File extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.changeText();
  }

  async changeText() {
    const userUid = firebase.auth().currentUser.uid;
    const folderUid = this.props.navigation.getParam('folderUid', 'Error');
    const fileUid = this.props.navigation.getParam('fileUid', 'Error');

    try {
      const res = await firebase.database().ref(`/${userUid}/filesText/${folderUid}/${fileUid}`).once('value');
      const cipherText = _.first(_.values(res.val()));
      Crypto.decryptData(fileUid, cipherText, (err, plainText) => {
        if (!err) {
          this.props.updateText(plainText);
        }
      });
    } catch (e) {
      alert('An error occurred');
    }

  }

  render() {
    return (
      <View style={styles.container} >
        <TextInput style={styles.input} multiline placeholder={'Type something...'} value={this.props.text} onChangeText={text => this.props.updateText(text)} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  text: state.FileReducer.text
});

export default connect(mapStateToProps, { updateText, fetchTextData })(File);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6A15E',
    padding: 15
  },
  input: {
    color: '#000',
    fontSize: 18
  }
});