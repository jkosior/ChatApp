import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import StyledInput from './StyledInput';
import AuthContext from '../contexts/AuthContext'

import { styles } from '../styles/LoginComponent';

export default props =>
    <React.Fragment>
        <StyledInput
            placeholder="username"
            icon="person"
        />
        <StyledInput
            placeholder="password"
            icon="lock"
        />
        <AuthContext.Consumer>
            {
                ({login, loading}) => <Button
                    title="Start chat"
                    buttonStyle={styles.button}
                    loading={loading}
                    onPress={login}
                />
            }
        </AuthContext.Consumer>
    </React.Fragment>
