import React, { Component } from 'react';
import { View, Text, Keyboard, StyleSheet, Platform } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default class extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            drawerLabel: 'Chat'
        };
    }

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
        console.log('up')
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
                    title='send'
                    buttonStyle={styles.button}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: StyleSheet.hairlineWidth,
        backgroundColor: "white",
        height: 55,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "flex-end"
    },
    input: {
        height: 55,
        width: '75%'
    },
    inputContainer: {
        height: 55,
        width: '75%'
    },
    button: {
        height: 55,
        width: 90
    }
})
