import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, TouchableOpacity, Image, ImageBackground, ActivityIndicator } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig } from '../env' ;
import image from '../image/ranee.jpeg';
import home from '../image/home3.jpg';
import chatbot from '../image/chat1.png';

import menu from '../image/menu.png';
import point from '../image/point.png';

const BOT_USER = {
    _id: 2,
    name: 'ARSH',
    avatar: chatbot
};
var isHidden = true;

export default class Chat extends Component {


    state = {
        messages: [
            {
                _id: 1,
                text: 'Hi! I am ARSH 🤖.\n\nHow may I help you today?',
                createdAt: new Date(),
                user: BOT_USER
            }
        ]
    };

    
    componentDidMount() {
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_FRENCH,
            dialogflowConfig.project_id
        );
    }
    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
        }));
        let message = messages[0].text;
        Dialogflow_V2.requestQuery(
            message,
            result => this.handleGoogleResponse(result),
            error => console.log(error)
        );
    }
    handleGoogleResponse(result) {
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        this.sendBotResponse(text);
    }
    sendBotResponse(text) {
        let msg = {
            _id: this.state.messages.length + 1,
            text,
            createdAt: new Date(),
            user: BOT_USER
        };
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [msg])
        }));
    }



    render() {

        return (

            <View style={styles.container}>
                <ImageBackground style={styles.back} source={image}>
                    <View style={styles.start}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Image style={styles.profileImg} source={chatbot} />

                        </TouchableOpacity>
                       
                        <GiftedChat
                            messages={this.state.messages}
                            onSend={messages => this.onSend(messages)}
                            user={{
                                _id: 1
                            }}
                        />

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

   
    start: {
        flex: 1,
        width: 300,
        marginTop: 100,
        justifyContent: "center",
        backgroundColor: 'rgba(255,255,255, 0.5)',
        // alignItems: "center",

        borderRadius: 25,
        alignSelf: 'center',




    },

    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileImg: {
        height: 105,
        width: 100,
        borderRadius: 30,
        marginTop: -70,
        marginLeft: 115,




    },


});







