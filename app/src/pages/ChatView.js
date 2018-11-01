import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, FlatList, RefreshControl } from 'react-native';
import ChatInput from '../components/ChatInput';
import ChatMessages from '../components/ChatMessages';

export default class extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            drawerLabel: 'Chat'
        };
    }

    render () {
        return (
            <React.Fragment>
                <ChatMessages/>
                <ChatInput/>
            </React.Fragment>
        )
    }


};
