import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, ImageBackground, ActivityIndicator } from 'react-native';
import tunisieimage from '../image/carte.png';
import facebook from '../image/fb.png';
import google from '../image/google.png';
import { SocialIcon, Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isLoading: false,

        }
    }
    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    userLogin = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Entrer vos  details !')
        } else {
            this.setState({
                isLoading: true,
            })

            auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    console.log(res)
                    console.log('Utilisateur connecter')
                    this.setState({
                        isLoading: false,
                        email: '',
                        password: ''
                    })
                    this.props.navigation.navigate('Home')
                })
                .catch(error => {
                    this.setState({ errorMessage: error.message })
                    Alert.alert('verifier vos coordonnées')
                    this.setState({
                        isLoading: false,
                    })
        
                
                })
        }
    }



    render() {
        if (this.state.isLoading) {
            return (
              <View style={styles.preloader}>
                <ActivityIndicator size="small" color="#00ff00" justifyContent= "center" />
         
              </View>
      
            )
          }

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.back} source={tunisieimage}>

                    <View style={styles.inputView1} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email..."
                            placeholderTextColor="#ffffff"
                            keyboardType='email-address'
                            value={this.state.email}
                            onChangeText={(val) => this.updateInputVal(val, 'email')}


                        />
                    </View>
                    <View style={styles.inputView2} >
                        <TextInput
                            style={styles.inputText}
                            secureTextEntry={true}
                            placeholder="Mot de passe..."
                            placeholderTextColor="#ffffff"
                            value={this.state.password}
                            onChangeText={(val) => this.updateInputVal(val, 'password')}

                        />
                    </View>


                    <TouchableOpacity
                        style={styles.loginBtnfb}>
                        <Image style={styles.fb} source={facebook} />
                        <Text style={styles.fbtext}>Se Connecter avec facebook</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.loginBtngoogle}>
                        <Image style={styles.fb} source={google}>

                        </Image>
                        <Text style={styles.fbtext}>Se Connecter avec google</Text>
                    </TouchableOpacity>




                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={() => this.userLogin()}
                        >
                            
                        <Text style={styles.logintext}>Se Connecter</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.signup}
                        onPress={() => this.props.navigation.navigate('Signup')}>
                        <Text style={styles.signuptext}>creer un noveau compte !</Text>
                    </TouchableOpacity>



                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },


    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    inputView1: {
        width: "80%",
        backgroundColor: 'rgba(0, 76, 153, 0.5)',
        borderRadius: 25,
        height: 50,
        marginTop: 200,
        marginBottom: 10,

        justifyContent: "center",
        padding: 20
    },
    inputView2: {
        width: "80%",
        backgroundColor: 'rgba(0, 76, 153, 0.5)',
        borderRadius: 25,
        height: 50,
        marginBottom: 10,
        justifyContent: "center",
        padding: 20,

    },
    inputText: {
        height: 50,
        color: "white",

    },
    logintext: {
      
        flexDirection: 'row',
        fontSize: 16,
        color: "#1e90ff"
    },
    fbtext: {
        marginHorizontal:-90,
        flexDirection: 'row',
        fontSize: 16,
        color: "#ffffff"
    },
    signuptext: {
        fontSize: 16,
        color: "#ffffff"
    },
    loginBtn: {
        width: "50%",
        backgroundColor: "white",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30

    },
    loginBtnfb: {
        flexDirection: 'row',
        width: "75%",
        backgroundColor: "#3B5998",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,

    },
    signup: {


        width: "70%",
        backgroundColor: 'rgba(0, 76, 153, 0)',
        borderRadius: 25,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,

    },
    loginBtngoogle: {
        flexDirection: 'row',

        width: "75%",
        backgroundColor: "#EA4335",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,

    },
    back: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"


    },
    fb: {
        flexDirection: 'row',
        marginLeft: 0,
        width: 50,
        height: 50,
        right: 95,
        resizeMode: 'contain'




    },

    Texty: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'sans-serif-thin',
        backgroundColor: 'transparent',
        marginBottom: 10,

    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }

});