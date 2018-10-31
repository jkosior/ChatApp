import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import StyledInput from './StyledInput';
import AuthContext from '../contexts/AuthContext';

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
        <StyledInput
            placeholder="confirm password"
            icon="lock"
        />
        <AuthContext.Consumer>
            {
                ({register, loading}) => <Button
                    title="Register"
                    buttonStyle={styles.button}
                    onPress={register}
                    loading={loading}
                />
            }
        </AuthContext.Consumer>
    </React.Fragment>
