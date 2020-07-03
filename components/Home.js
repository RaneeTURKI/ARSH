import React, { Component } from 'react';
import { Animated,View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, TouchableOpacity, Image, ImageBackground, ActivityIndicator } from 'react-native';
import home from '../image/ranee.jpeg';
import chatbot from '../image/chat1.png';

import menu from '../image/menu.png';
import point from '../image/point.png';



var isHidden = true;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(-500),   //This is the initial position of the subview
            //nom
        };
    }


    opendiscussion() {


        var toValue = -400;  // ba3d ma tila3 b9adaich tahbat ki

        if (isHidden) {
            toValue = -70;
        }

        //This will animate the transalteY of the subview between 0 & 100 depending on its current state
        //100 comes from the style below, which is the height of the subview.
        Animated.spring(

            this.state.bounceValue,
            {
                toValue: toValue,

                useNativeDriver: true,
            }
        ).start();

        isHidden = !isHidden;
    }





    render() {

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.back} source={home}>



                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}


                        style={{ marginBottom: 200 }}
                        style={styles.start}>
                        <Image style={styles.profileImg} source={chatbot} />

                    </TouchableOpacity>

                    <View style={styles.ensemble}>
                        <Animated.View
                            style={[styles.subView,
                            { transform: [{ translateX: this.state.bounceValue }] }]}
                        >
                           
                        </Animated.View>
                        <TouchableOpacity onPress={() => { this.opendiscussion() }}
                        >
                            
                            <Image
                                style={{ width: 50, height: 50, marginRight: 300, marginBottom: -10 }}
                                source={menu}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            onPress={() => Alert.alert('tararararararrararrrrrrrrrrrrraaaara !')}
                        >
                            <Image
                                style={{ width: 50, height: 50, marginLeft: -50, marginBottom: -10 }}
                                source={point}
                            />
                        </TouchableOpacity>
                    </View>


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

    subView: {
        borderRadius: 25,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 50,
        backgroundColor: "#FFFFFF",
        marginBottom: -610,
        height: 650,  //taille 
      },
    start: {

        width: 300,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffff',
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom: -690,



    },

    start2: {

        width: 300,
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffff',
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom: -650,



    },

    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileImg: {
        height: 100,
        width: 100,
        borderRadius: 30,
        marginBottom: 120,
        marginLeft: 30,
    },
    band: {

        width: 300,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 76, 153, 0.5)',
        borderRadius: 0,
        alignSelf: 'center',




    },

    startext: {

        color: "#EEEEEE",

    },
    ensemble: {
        flexDirection: 'row',
    },
});