import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight,Alert, TouchableOpacity, Alert, Image, ImageBackground, ActivityIndicator } from 'react-native';
import image from '../image/ranee.jpeg';

export default class Profil extends Component {



    render() {

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.back} source={image}>
                    <View style={styles.ensemble}>
                        <TouchableHighlight
  >
                            <Image source={{ uri: "https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }} style={styles.profileImg} />
                        </TouchableHighlight>
                        <View style={styles.carre}>
                        <Text>This is me Ranee TURKI</Text>
                        </View>
                    </View>
                    <View style={styles.carre2}></View>
                </ImageBackground>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"


    },
    carre: {

        width: 190,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255,255,255, 0.5)',
        marginLeft: 5,
        marginBottom:30,
        borderRadius: 40,


    },
    carre2: {

        width: 130,
        height: 350,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffff',
        marginLeft: -380,
        marginBottom:30,
        borderRadius: 40,


    },
    ensemble:{
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileImg: {
        height: 120,
        width: 120,
        borderRadius: 60,
        marginLeft: -30,
        marginVertical:20,
    },
});