import React, { Component } from 'react';
import { View, Text, Keyboard, Platform } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { styles } from '../styles/ChatInput';

export default class extends Component {

    state = {
        position: 'absolute'
    }

    componentWillMount() {
        if (Platform.OS === 'ios') {
            this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
            this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
        } else {
            this.keyboardWillShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
            this.keyboardWillHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
        }
    }

    componentWillUnmount() {
         this.keyboardWillShowListener.remove();
         this.keyboardWillHide.remove();
    }

    keyboardWillShow = () => {
        const { position } = this.state;
        if (position !== 'relative') {
            this.setState({ position: 'relative' });
        }
    }

    keyboardWillHide = () => {
        const { position } = this.state;
        if (position !== 'absolute') {
            this.setState({ position: 'absolute' });
        }
    }

    render () {

        return (
                <View style={[styles.container, { position: this.state.position }]}>
                    <Input
                        placeholder="Input message..."
                        placeholderTextColor="grey"
                        inputStyle={styles.input}
                        containerStyle={styles.inputContainer}
                    />
                    <Button
                        title='Send'
                        buttonStyle={styles.button}
                        titleStyle={{ fontWeight: "900" }}
                    />
                </View>
        );
    }
}
