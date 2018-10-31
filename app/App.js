import React from 'react';
import { createStackNavigator, StyleSheet, createDrawerNavigator } from 'react-navigation';
import { Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import LoginView from './src/pages/LoginView';
import ChatView from './src/pages/ChatView';

import { styles } from './src/styles/App';

const DrawerNavigation = createDrawerNavigator({
    ChatView: {
        screen: ChatView,
    }
})

const DrawerStack = createStackNavigator({
    DrawerNavigation: {
        screen: DrawerNavigation
    }
},
{
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: "#000",
        },
        headerLeft:
            <Button
                onPress={navigation.toggleDrawer}
                title="Menu"
                buttonStyle={styles.button}
            />,
        headerTitle: <Text style={styles.header}>Chat</Text>
    })
})

const RootNavigator = createStackNavigator({
    Login: {
        screen: LoginView
    },
    DrawerStack: {
        screen: DrawerStack
    }
},
{
    initialRouteName: 'DrawerStack',
    headerMode: 'none'
});

export default class App extends React.Component {
    render() {
        return (<RootNavigator/>);
    }
};
