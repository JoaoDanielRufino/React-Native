import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

export default class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', err: '' };
  }

  authenticate = () => {
    const { email, password } = this.state;
    if (email != '' && password != '') {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Home'))
        .catch(err => this.setState({ err: err.message, email: '', password: '' }));
    }
    else {
      this.setState({ err: 'Please, all inputs needs to be filled' });
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.header} >
          <Text style={styles.headerText} >Sign in</Text>
        </View>

        <View style={styles.body} >
          <TextInput style={styles.input} placeholder="E-mail" value={this.state.email} onChangeText={email => this.setState({ email })} />
          <TextInput style={styles.input} secureTextEntry placeholder="Password" value={this.state.password} onChangeText={password => this.setState({ password })} />
          <Text style={styles.error} >{this.state.err}</Text>
        </View>

        <View style={styles.end} >
          <TouchableOpacity style={styles.button} onPress={() => this.authenticate()} >
            <Text style={styles.buttonText} >Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} >
            <Text style={styles.text} >New here? Create an account</Text>
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
  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 40,
    color: '#F8D7BF'
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
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8D7BF'
  },
  text: {
    fontSize: 16,
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