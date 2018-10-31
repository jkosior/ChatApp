import React, { Component } from 'react';
import { ImageBackground, View, KeyboardAvoidingView } from 'react-native';
import { Card, Button } from 'react-native-elements';

import AuthContext from '../contexts/AuthContext';
import RegisterComponent from '../components/RegisterComponent';
import LoginComponent from '../components/LoginComponent';

import { styles } from '../styles/LoginView'

export default class Login extends Component {

    state = {
        toggle: false,
        loading: false
    }

    static navigationOptions = {
        header: ({ navigation }) => false
    }

    toggleView = () => {
        this.setState(prevState => (
            {toggle: !prevState.toggle }
        ));
    }

    login = () => {
        const { navigation } = this.props;
        const { loading } = this.state;
        this.setState({ loading: !loading })
        navigation.navigate('DrawerNavigation');
    }

    register = () => {
        const { navigation } = this.props;
        const { loading } = this.state;
        this.setState({ loading: !loading })
        navigation.navigate('DrawerNavigation');
    }

    render () {
        const { toggle, loading } = this.state;
        const context = {
            register: this.register,
            login: this.login,
            loading
        }

        return (
            <View style={styles.container}>
                <ImageBackground
                    source={ require('../../assets/bck.jpg') }
                    style={styles.backgroundImage}
                >
                    <KeyboardAvoidingView behavior="padding">
                        <Card
                            containerStyle={styles.card}
                        >
                            <View style={styles.view}>
                                <AuthContext.Provider value={context}>
                                    {
                                        toggle ? <RegisterComponent /> : <LoginComponent />
                                    }
                                </AuthContext.Provider>
                                <Button
                                    title={toggle ? "I have an account" : "Register"}
                                    buttonStyle={styles.button}
                                    onPress={this.toggleView}
                                />
                            </View>
                        </Card>
                    </KeyboardAvoidingView>

                </ImageBackground>
            </View>
        )
    }
};
