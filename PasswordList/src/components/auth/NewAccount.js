import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

export default class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', confirmPassword: '', ok: false, err: '' };
  }

  authenticate = () => {
    if (this.state.email != '' && this.state.password != '' && this.state.confirmPassword != '') {
      if (this.state.password === this.state.confirmPassword) {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('Home'))
          .catch(err => this.setState({ err: err.message, email: '', password: '', ok: false }));
      }
      else {
        this.setState({ err: 'Type the same password on the input fields', email: '', password: '', confirmPassword: '', ok: false });
      }
    }
    else {
      this.setState({ err: 'Please, all inputs needs to be filled' });
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.header} >
          <Text style={styles.text} >Sign Up</Text>
        </View>

        <View style={styles.body} >
          <TextInput style={styles.input} placeholder="E-mail" value={this.state.email} onChangeText={email => this.setState({ email })} />
          <TextInput style={styles.input} secureTextEntry placeholder="Password" value={this.state.password} onChangeText={password => this.setState({ password })} />
          <TextInput style={styles.input} secureTextEntry placeholder="Confirm Password" value={this.state.confirmPassword} onChangeText={confirmPassword => this.setState({ confirmPassword })} />
          <Text style={styles.error} >{this.state.err}</Text>
        </View>

        <View style={styles.end} >
          <TouchableOpacity style={styles.button} onPress={() => this.authenticate()} >
            <Text style={styles.buttonText} >Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6A15E',
    padding: 20
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  end: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 40,
    color: '#F8D7BF'
  },
  input: {
    height: 45,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: '#F67E21',
    paddingHorizontal: 20,
    marginBottom: 10
  },
  button: {
    height: 45,
    backgroundColor: '#451F01',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8D7BF'
  },
  error: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EF1D1D',
    marginBottom: 10
  }
});